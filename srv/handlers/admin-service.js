const { DEBUG } = process.env

module.exports = (srv) => {

  const { Books, OrderItems } = srv.entities ('my.bookshop')

  // Check all amounts against stock
  srv.before (['CREATE', 'UPDATE'], 'Orders', async (req) => {// TODO: change to SAVE once implemented as alias for CREATE and UPDATE
    const cqn = SELECT.from(Books).columns('title')

    for (const {amount, book_ID} of req.data.Items) {
      cqn.or({ID: book_ID, and: {stock: {'<': amount}}})
    }

    const tx = cds.transaction(req)

    for (const {title} of await tx.run(cqn)) {
      req.error(400, `Amount is greater than stock for book ${title}`, 'OrderItems/amount')
    }
  })

  // on-the-fly calculate the total Order price based on the OrderItems' netAmounts
  srv.after (['READ','EDIT'], 'Orders', async (orders, req) => {
    const ordersByID = orders.reduce ((all,o) => { (all[o.ID] = o).total=0; return all },{})
    return cds.transaction(req) .run (
      SELECT.from(OrderItems) .columns ('parent_ID', 'netAmount')
       .where ({ parent_ID: {in: Object.keys(ordersByID)} })
    ) .then (items =>
      items.forEach (item => ordersByID [item.parent_ID] .total += item.netAmount)
    )
  })

  // calculate the netAmount for the order's items based on the books' prices
  srv.before ('PATCH', 'OrderItems', async (req) => {
    const {ID,amount} = req.data; if (!amount)  return // amount not touched
    const tx = cds.transaction(req)
    const item = await tx.run (SELECT.one(req.target).columns({ref: ['book'], expand: [{ref: ['price']}, {ref: ['stock']}]}).where({ID}))
    if (!item)  return req.reject(400, `No order item with id ${ID} found`)
    req.data.netAmount = (item.book.price||0) * (amount||0)
    if (amount > item.book.stock) return req.info(`Amount is greater than stock`, 'amount')
  })

    // some event tracing, for troubleshooting
    DEBUG && srv.before('*', (req) => {
      const eventToString = (req) => `${req.event}${req.target ? ' ' + req.target.name : ''}`
      req.on('failed', function (err) { console.log(`${eventToString(this)} failed with error ${err.message}`) })
      req.on('succeeded', function () { console.log(`${eventToString(this)} succeeded`) })
      req.on('done', function () { console.log(`${eventToString(this)} is done`) })
    })
}
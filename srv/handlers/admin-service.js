const { DEBUG } = process.env

module.exports = (srv) => {

  const { Books, OrderItems } = srv.entities ('my.bookshop')

  // Check all amounts against stock before activating
  srv.before (['CREATE', 'UPDATE'], 'Orders', async (req) => {// TODO: change to SAVE once implemented as alias for CREATE and UPDATE
    const updates = []
    const tx = cds.transaction(req)

    for (const {amount, book_ID} of req.data.Items) {
      updates.push(tx.run(
        UPDATE(Books).where({ID: book_ID})
        .and(`stock >=`, amount)
        .set(`stock -=`, amount)
      ))
    }

    return Promise.all(updates).then(affected => {
      for (let i = 0, length = affected.length; i < length; i++) {
        if (!affected[i]) req.error(409, `Amount ${req.data.Items[i].amount} is greater than books in stock for ID ${req.data.Items[i].book_ID}`)
      }
    })
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
    const {ID,amount} = req.data; if (amount === undefined) return // amount not touched
    const tx = cds.transaction(req)
    const item = await tx.run (SELECT.one(req.target).columns({ref: ['book'], expand: [{ref: ['price']}, {ref: ['stock']}]}).where({ID}))
    if (!item)  return req.reject(400, `No order item with id ${ID} found`)
    if (amount > item.book.stock) return req.info(`Amount is greater than stock`, 'amount')
    req.data.netAmount = (item.book.price||0) * (amount||0)
  })

    // some event tracing, for troubleshooting
    DEBUG && srv.before('*', (req) => {
      const eventToString = (req) => `${req.event}${req.target ? ' ' + req.target.name : ''}`
      req.on('failed', function (err) { console.log(`${eventToString(this)} failed with error ${err.message}`) })
      req.on('succeeded', function () { console.log(`${eventToString(this)} succeeded`) })
      req.on('done', function () { console.log(`${eventToString(this)} is done`) })
    })
}
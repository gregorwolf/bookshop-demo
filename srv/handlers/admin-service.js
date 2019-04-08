const { DEBUG } = process.env

module.exports = (srv) => {

  const { Books, OrderItems } = srv.entities ('my.bookshop')

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
    const [item] = await tx.run (SELECT.one(req.target).where({ID}))  // FIXME: SELECT.one should return *one* entry
    if (!item)  req.reject(400, `No order item with id ${ID} found`)
    if (!item.book_ID)  return //> no book assigned yet
    const [{price}] = await tx.run (SELECT.one (Books, ['price']).where({ ID: item.book_ID }))  // FIXME: SELECT.one should return *one* entry
    req.data.netAmount = (price||0) * (amount||0)
  })

    // some event tracing, for troubleshooting
  DEBUG && srv.before('*', (req) => {
    const eventToString = (req) => `${req.event}${req.target ? ' ' + req.target.name : ''}`
    req.on('failed', (err, req) => console.log(`${eventToString(req)} failed with error ${err.message}`))
    req.on('succeeded', (req) => console.log(`${eventToString(req)} succeeded`))
    req.on('done', (req) => console.log(`${eventToString(req)} is done`))
  })

}
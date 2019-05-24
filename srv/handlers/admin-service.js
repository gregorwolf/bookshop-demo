module.exports = (srv) => {

  const { Books, OrderItems } = srv.entities ('my.bookshop')

  // Check all amounts against stock before activating
  srv.before (['CREATE', 'UPDATE'], 'Orders', (req) => {
    const tx = cds.transaction(req), order = req.data
    return Promise.all (order.Items.map (each => tx.run(
      UPDATE(Books) .where ({ID:each.book_ID})
      .and (`stock >=`, each.amount)
      .set (`stock -=`, each.amount)
    ) .then (affectedRows => { if (!affectedRows) {
      req.error (409, `${each.amount} exceeds stock for book #${each.book_ID}`)
    }})))
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
  srv.before ('PATCH', 'Orders/Items', async (req) => {
    const {ID,amount} = req.data; if (amount === undefined) return // amount not touched
    const tx = cds.transaction(req)
    const item = await tx.run (SELECT.one(req.target).columns({ref: ['book'], expand: [{ref: ['price']}, {ref: ['stock']}]}).where({ID}))
    if (!item)  return req.reject(400, `No order item with id ${ID} found`)
    if (amount > item.book.stock) return req.info(`Amount is greater than stock`, 'amount')
    req.data.netAmount = (item.book.price||0) * (amount||0)
  })

}

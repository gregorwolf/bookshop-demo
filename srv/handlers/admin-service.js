module.exports = (srv) => {

  const {Books, OrderItems} = cds.entities('AdminService')

  // calculate the netAmount for the order's items based on the books' prices
  srv.before ('PATCH', 'OrderItems', async (req) => {
    const item = req.data
    const tx = cds.transaction(req)
    // need to read the current data, which is the drafts table
    // TODO remove dependency on draft mode
    const OrderItemsDrafts = OrderItems['@cds.persistence.name'] + '_drafts'
    const completeItems = await tx.run(SELECT.one(OrderItemsDrafts).where({ ID: item.ID }))
    if (!completeItems || completeItems.length < 1) return req.reject(400, `No item with id ${item.ID} found`)

    //merge the new values into completed items
    const completeItem = Object.assign(completeItems[0], item)

    if (completeItem.book_ID) {
      const books = await tx.run(SELECT.one(Books).where({ ID: completeItem.book_ID }))
      const book = books.length === 1 && books[0]
      if (completeItem.amount && book.price ) {
        item.netAmount = completeItem.amount * book.price
      }
    }
  })

  // on-the-fly calculate the total Order price based on the OrderItems' netAmounts
  srv.after ('READ', 'Orders', computeTotal)
  // TODO remove dependency on draft mode
  srv.after ('EDIT', 'Orders', computeTotal)

    // some event tracing, for troubleshooting
  if (process.env.DEBUG) {
    srv.before('*', (req) => {
      const eventToString = (req) => `${req.event}${req.target ? ' ' + req.target.name : ''}`
      req.on('failed', (err, req) => console.log(`${eventToString(req)} failed with error ${err.message}`))
      req.on('succeeded', (req) => console.log(`${eventToString(req)} succeeded`))
      req.on('done', (req) => console.log(`${eventToString(req)} is done`))
    })
  }

  async function computeTotal (orders, req) {
    const ordersByID = {}
    orders.forEach(order => { order.total = 0; ordersByID[order.ID] = order })
    const items = await cds.transaction(req).run(
      SELECT.from  ( OrderItems, ['parent_ID', 'netAmount'] )
            .where ({ parent_ID: { in: Object.keys(ordersByID) } })
    )
    items.forEach(item => { ordersByID[item.parent_ID].total += item.netAmount })
  }

}
module.exports = (srv) => {

  const {Books, OrderItems} = cds.entities('AdminService')

  // calculate the netAmount for the order's items based on the books' prices
  srv.before ('UPDATE', 'OrderItems', async (req) => {
    const item = req.data
    // need to read the current data, which is the drafts table
    // TODO remove dependency on draft mode
    const OrderItemsDrafts = OrderItems['@cds.persistence.name'] + '_drafts'
    const completeItems = await req.run(SELECT.one(OrderItemsDrafts).where({ ID: item.ID }))
    if (!completeItems || completeItems.length < 1)  req.reject(400, `No item with id ${item.ID} found`)

    //merge the new values into completed items
    const completeItem = Object.assign(completeItems[0], item)

    if (completeItem.book_ID) {
      const books = await req.run(SELECT.one(Books).where({ ID: completeItem.book_ID }))
      const book = books.length === 1 && books[0]
      if (completeItem.amount && book.price ) {
        item.netAmount = completeItem.amount * book.price
      }
    }
  })

  // on-the-fly calculate the total Order price based on the OrderItems' netAmounts
  srv.after ('READ', 'Orders', async (orders, req) => {
    const orderIDs = orders.map(order => order.ID)
    const items = await req.run(SELECT.from(OrderItems, ['ID', 'parent_ID', 'netAmount']).where({ parent_ID: {in: orderIDs} }))

    const ordersByID = {}
    orders.forEach(order => { order.total = 0; ordersByID[order.ID] = order })
    items.forEach(item => {
      ordersByID[item.parent_ID].total += item.netAmount
    })
  })

}
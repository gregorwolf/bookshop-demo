module.exports = (srv) => {

  // const {Books, OrderItems} = cds.entities('my.bookshop')
  const {Books, OrderItems} = cds.entities('AdminService')
  // calculate the netAmount for the order's items based on the books' prices
  srv.before ('UPDATE', 'Orders', async (req) => {
    const items = req.data.Items || []
    const bookIDs = items.map(each => each.book_ID) 

    const booksByID = {}
    const books = await req.run(SELECT.from(Books, ['ID', 'price']).where({ ID: {in: bookIDs} }))
    books.forEach(book => booksByID[book.ID] = book)

    items.forEach(item => { item.netAmount = item.amount * booksByID[item.book_ID].price })
  })

  srv.before ('UPDATE', 'OrderItems', async (req) => {
    const item = req.data
    //Patches only go to the draft tables -> So let's hardwire the draft for now
    const draftPersistenceName = OrderItems['@cds.persistence.name'] + '_drafts'
    const completeItems = await req.run(SELECT.one(draftPersistenceName).where({ ID: item.ID }))
    var completeItem = completeItems.length === 1 && completeItems[0]

    if (completeItem) {
      //merge the new values into completed items
      completeItem = Object.assign(completeItem, item)

      if (completeItem && completeItem.book_ID) {
        const books = await req.run(SELECT.one(Books).where({ ID: completeItem.book_ID }))
        const book = books.length === 1 && books[0]
        if (completeItem.amount && book.price ) {
          item.netAmount = completeItem.amount * book.price 
        }
      }
    } else {
      console.log(`No item with id ${item.ID} found`)
    }
  })

  // on-the-fly calculate the total Order price based on the OrderItems' netAmounts
  srv.after ('READ', 'Orders', async (orders, req) => {
    const orderIDs = orders.map(order => order.ID)
    const items = await req.run(SELECT.from(OrderItems, ['ID', 'parent_ID', 'netAmount']).where({ parent_ID: {in: orderIDs} }))

    const ordersByID = {}
    orders.forEach(order => {
      order.total = 0
      ordersByID[order.ID] = order
    })
    items.forEach(item => {
      ordersByID[item.parent_ID].total += item.netAmount
    })
  })

}
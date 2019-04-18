const { DEBUG } = process.env

const _isCount = ({query: {SELECT: {columns}}}) => {
  return columns && columns.some(({func}) => func === 'count')
}
const _getColumns = (elements) => {
  return Object.values(elements)
    .filter(({type}) => type !== 'cds.Composition' && type !== 'cds.Association')
    .map(({name}) => name)
}

module.exports = (srv) => {

  const { Books, OrderItems } = srv.entities ('my.bookshop')

  // preparation of the on-the-fly calculation of the total Order price based on the OrderItems' netAmounts
  srv.before('READ', 'Orders', req => {
    if (_isCount(req)) return // Count does not need an extra calculation
    if (!req.query.SELECT.columns) req.query.columns(..._getColumns(req.target.elements)) // Temporary workaround to ensure columns
    if (!req.query.SELECT.columns.some(({ref}) => ref && ref[0] === 'Items')) {
      req._.removeItems = true
      req.query.columns({ref: ['Items'], expand: [{ref: ['netAmount']}]})
    }
  })

  // on-the-fly calculate the total Order price based on the OrderItems' netAmounts
  srv.after('READ', 'Orders', (result, req) => {
    if (_isCount(req)) return // Count does not need an extra calculation
    for (const row of result) {
      row.total = row.Items.reduce((acc, {netAmount}) => acc + netAmount, 0)
      if (req._.removeItems) delete row.Items // odata-server would reject the response
    }
  })


  // on-the-fly calculate the total Order price based on the OrderItems' netAmounts
  srv.after ('EDIT', 'Orders', async (orders, req) => {
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
    const item = await tx.run (SELECT.one(req.target).where({ID}))  // FIXME: SELECT.one should return *one* entry
    if (!item)  return req.reject(400, `No order item with id ${ID} found`)
    if (!item.book_ID)  return //> no book assigned yet
    const {price} = await tx.run (SELECT.one (Books, ['price']).where({ ID: item.book_ID }))  // FIXME: SELECT.one should return *one* entry
    req.data.netAmount = (price||0) * (amount||0)
  })

    // some event tracing, for troubleshooting
    DEBUG && srv.before('*', (req) => {
      const eventToString = (req) => `${req.event}${req.target ? ' ' + req.target.name : ''}`
      req.on('failed', function (err) { console.log(`${eventToString(this)} failed with error ${err.message}`) })
      req.on('succeeded', function () { console.log(`${eventToString(this)} succeeded`) })
      req.on('done', function () { console.log(`${eventToString(this)} is done`) })
    })

}
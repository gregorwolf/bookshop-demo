const cds = require('@sap/cds')
const crypto = require('crypto')

exports.beforeHandler = async (req) => {
  var tx = cds.transaction(req)
  userhash = ""
  if(req.user.id) {
    var hash = crypto.createHash('sha256')
    hash.update(req.user.id.toLowerCase())
    userhash = hash.digest('hex') 
  }
  var measurement = {
    tennant    : req.user.tennant,
    userhash   : userhash,
    eventName  : req.event,
    entityName : req.entity
  }
  var resultSet = await tx.run(
    INSERT.into('my.bookshop.Meterings').entries(measurement)
  )
}
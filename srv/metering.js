const cds = require('@sap/cds')
const crypto = require('crypto')

exports.beforeHandler = async (req) => {
  var tx = cds.transaction(req)
  var userhash = ""
  var tennant = req.user.tennant
  var VCAP_APPLICATION = JSON.parse(process.env.VCAP_APPLICATION)
  // To protect the user identity create a SHA256 hash for the lowercase Username
  if(req.user.id) {
    var hash = crypto.createHash('sha256')
    hash.update(req.user.id.toLowerCase())
    userhash = hash.digest('hex') 
  }
  // When running in a single tenant environment we use the informaiton 
  // from the VCAP_APPLICATION environment variable
  if(!tennant) {
    tennant = VCAP_APPLICATION.organization_name 
    + "-" + VCAP_APPLICATION.space_name 
  }
  var measurement = {
    tennant    : tennant,
    application : VCAP_APPLICATION.application_name,
    userhash   : userhash,
    eventName  : req.event,
    entityName : req.entity
  }
  var resultSet = await tx.run(
    INSERT.into('my.bookshop.Meterings').entries(measurement)
  )
}
var uuidv4 = require('uuid/v4');

module.exports = (srv) => {

  srv.on('UPDATE','Books', req => {
    console.log("UPDATE - Books: " + JSON.stringify(req.data))
    console.log("UPDATE - req.query.UPDATE.data: " + JSON.stringify(req.query.UPDATE.data))
    console.log("UPDATE - req.query.UPDATE.entity: " + JSON.stringify(req.query.UPDATE.entity))
    console.log("UPDATE - req.query.UPDATE.where: " + JSON.stringify(req.query.UPDATE.where))
		var changedEntity = JSON.stringify(req.query.UPDATE.entity)
		var changedEntityKey = JSON.stringify(req.query.UPDATE.where)
		var changedEntityData = JSON.stringify(req.query.UPDATE.data)
		var approver = 'SAPPROVER'
		// Log output to see the data we need to store in the approval table
		console.log("UPDATE - Books: " + JSON.stringify(req.data))
		console.log("UPDATE - req.query.UPDATE.entity: " + changedEntity)
		console.log("UPDATE - req.query.UPDATE.where: " + changedEntityKey)
    console.log("UPDATE - req.query.UPDATE.data: " + changedEntityData)
		var data = {
			'ID': uuidv4(), 
			'approver': approver, 
			'changedEntity': changedEntity,
			'changedEntityKey': changedEntityKey,
			'changedEntityData': changedEntityData,
			'status': 'R',
			'createdAt': new Date(),
			'createdBy': 'SUSER',
			'modifiedAt': new Date(), 
			'modifiedBy': 'SUSER'
    }
    /*
		var res = srv.insert(data) .into ("Approval")
		// var res = srv.create("Approval").entries(data)
		// Get a transaciton context
    // const tx = cds.transaction (req)
		*/
    cds.run (()=>{"transaction"
      INSERT.into('my.bookshop.Approval').entries (data)
    })
    /*
		var res = srv.run(INSERT.into ("Approval") .columns (
		  'ID', 'approver', 'changedEntity', 'changedEntityKey', 'changedEntityData', 'status'
		  , 'createdAt', 'createdBy', 'modifiedAt', 'modifiedBy'
		) .values (
			uuidv4(), approver, changedEntity, changedEntityKey, changedEntityData, 'R'
			, new Date(), 'SUSER', new Date(), 'SUSER'
		))
		req.info("I", "Change was requested at approver: " + approver)
    console.log("UPDATE - result: " + JSON.stringify(res))
    */
  })

}

var uuidv4 = require('uuid/v4');
const cds = require('@sap/cds')
const {
	Images
} = cds.entities

module.exports = (srv) => {

	srv.before('UPDATE','Books', req => {
		var where = req.query.UPDATE.where;
		var changedEntity = JSON.stringify(req.query.UPDATE.entity)
		var changedEntityKey = JSON.stringify(where)
		var changedEntityData = JSON.stringify(req.query.UPDATE.data)
		// Log output to see the data we need to store in the approval table
		console.log("before UPDATE - Books: " + JSON.stringify(req.data))
		console.log("before UPDATE - req.query.UPDATE.entity: " + changedEntity)
		console.log("before UPDATE - req.query.UPDATE.where: " + changedEntityKey)
		console.log("before UPDATE - req.query.UPDATE.data: " + changedEntityData)

	})

  srv.on('UPDATE','Books', req => {
		var where = req.query.UPDATE.where;
		var changedEntity = JSON.stringify(req.query.UPDATE.entity)
		var changedEntityKey = JSON.stringify(where)
		var changedEntityData = JSON.stringify(req.query.UPDATE.data)
		var approver = 'SAPPROVER'
		// Log output to see the data we need to store in the approval table
		console.log("UPDATE - Books: " + JSON.stringify(req.data))
		console.log("UPDATE - req.query.UPDATE.entity: " + changedEntity)
		console.log("UPDATE - req.query.UPDATE.where: " + changedEntityKey)
		console.log("UPDATE - req.query.UPDATE.data: " + changedEntityData)
		// Do not update anything on the original Object
		// req.query.UPDATE.data = {}
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
		req.info(
			{
				type: "sap.ui.core.MessageType.Information", 
				message: "Change was requested at approver: " + approver
			}
		)
		return cds.transaction(req) 
		.run(
			INSERT.into('my.bookshop.Approval').entries (data)
		)
		.then(() => {})
		// 
    /*
		var res = srv.run(INSERT.into ("Approval") .columns (
		  'ID', 'approver', 'changedEntity', 'changedEntityKey', 'changedEntityData', 'status'
		  , 'createdAt', 'createdBy', 'modifiedAt', 'modifiedBy'
		) .values (
			uuidv4(), approver, changedEntity, changedEntityKey, changedEntityData, 'R'
			, new Date(), 'SUSER', new Date(), 'SUSER'
		))
    console.log("UPDATE - result: " + JSON.stringify(res))
    */
  })
/*
	srv.on('READ', 'Images', (req, next) => {
		if (!req.data.ID) {
			return next()
		}
		console.log(req.data.ID)

		return {
			value: _getObjectStream(req.data.ID)
		}
	})

	function _getObjectStream(objectKey) {
		console.log(objectKey)
		return "Test"
	}
*/
}

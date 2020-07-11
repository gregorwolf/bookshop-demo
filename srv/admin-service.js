module.exports = (srv) => {

	const { Role_BusinessObject, Role_User, Orders } = srv.entities

	srv.before('READ', [ ], async req => {
		var targetName = req.target.name
		var logonName = req.attr.userInfo.logonName
		console.log("READ - logonName: " + logonName)
		console.log("READ - req.target.name: " + targetName)
		var targetNameElements = targetName.split(".")
		var entity = targetNameElements[targetNameElements.length-1]
		console.log("READ - entity: " + entity)
		// Check if User is assigned to a Role that contains the entity
		// var query = SELECT.from(Role)
		cds.transaction(req).run(
			SELECT 
				.from(Role_User, ['parent_ID']) 
				.where({ user_username : logonName })
		)
		.then(
			roleuser => { 
				if (roleuser.length === 0) {
					req.error (409, `user ${logonName} isn't assigned to any role`)
				} else {
					console.log("READ - roleuser: " + JSON.stringify(roleuser))
					cds.transaction(req).run(
						SELECT 
							.from(Role_BusinessObject, ['BusinessObject_ID']) 
							.where({ parent_ID: roleuser[0].parent_ID })
					)
					.then(
						roleBusinessObject => {
							if (roleBusinessObject.length === 0) {
								req.error (409, `The role ${roleuser[0].parent_ID} isn't assigned to any business object`)
							} else {
								console.log("READ - roleBusinessObject: " + JSON.stringify(roleBusinessObject))
								var allowed = false
								for (let i in roleBusinessObject) {
									if(roleBusinessObject[i].BusinessObject_ID === entity) {
										allowed = true
									}
								}
								if(!allowed) {
									req.error (409, `user ${logonName} isn't assigned to the business object ${entity}`)
								}
							}
						}
					)
				}
			}
		)
	})

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

	srv.on('READ', 'User', req => {
		const users = [
			{
				username:     req.user.id,
				is_admin:     req.user.is("admin"),
				is_roleadmin: req.user.is("roleadmin"),
			}
		]
		return users;
	})

	srv.on("checkConsistency", Orders, req => {
		console.log(req.params[0])
		var msgInfo = {
			code: "SY001",
			message: "Order is consistent",
			numericSeverity: 1,
			persistent: true
		}
		var msgError = {
			code: "SY002",
			message: "Order is not consistent",
			numericSeverity: 4
		}
		if(req.params[0] === "7e2f2640-6866-4dcf-8f4d-3027aa831cad") {
			req.error(msgError)
		} else {
			if(req.params[0] === "d3924131-0870-44bc-b0c1-2ea3808cda5a") {
				msgInfo.code = "OSS001"
			}
			req.info(msgInfo)
		}
		return {}
	})
	
/*
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
			'createdBy': req.attr.userInfo.logonName
		}
		// var res = srv.insert(data) .into ("Approval")
		// var res = srv.create("Approval").entries(data)
		// Get a transaciton context
		// const tx = cds.transaction (req)
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
		// var res = srv.run(INSERT.into ("Approval") .columns (
		// 	'ID', 'approver', 'changedEntity', 'changedEntityKey', 'changedEntityData', 'status'
		// 	, 'createdAt', 'createdBy', 'modifiedAt', 'modifiedBy'
		// ) .values (
		// 	uuidv4(), approver, changedEntity, changedEntityKey, changedEntityData, 'R'
		// 	, new Date(), 'SUSER', new Date(), 'SUSER'
		// ))
		// console.log("UPDATE - result: " + JSON.stringify(res))
	})
*/
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

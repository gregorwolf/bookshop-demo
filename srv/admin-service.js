module.exports = (srv) => {

  srv.on('UPDATE','Books', req => {
    console.log("UPDATE - Books: " + JSON.stringify(req.data))
    console.log("UPDATE - req.query.UPDATE.data: " + JSON.stringify(req.query.UPDATE.data))
    console.log("UPDATE - req.query.UPDATE.entity: " + JSON.stringify(req.query.UPDATE.entity))
    console.log("UPDATE - req.query.UPDATE.where: " + JSON.stringify(req.query.UPDATE.where))
  })

}

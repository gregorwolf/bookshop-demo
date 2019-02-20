module.exports = (srv) => {
  srv.after ('READ', 'Orders', each => {
    // each.total = 4711
  })

}
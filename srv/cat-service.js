module.exports = (srv) => {

  const { Books, Authors } = srv.entities

  srv.on('getNumberOfBooksForDynamicTile', req => {
    console.log("getNumberOfBooksForDynamicTile: " + JSON.stringify(req.data))
    return {
      icon : "sap-icon://travel-expense",
      info : "Quarter Ends!",
      infoState : "Critical",
      number : "43.33",
      numberDigits : 1,
      numberFactor : "k",
      numberState : "Positive",
      numberUnit : "EUR",
      stateArrow : "Up",
      subtitle : "Quarterly overview",
      title : "Travel Expenses"
    }
  })

  // Sample based on 
  // https://blogs.sap.com/2019/04/15/annotated-links-episode-15-of-hands-on-sap-dev-with-qmacro/
  srv.on('hello', req => {
    console.log("hello: " + JSON.stringify(req.data))
    return "Hello " + req.data.to
  })

  /*
  srv.on('READ','BusinessPartner', (req)=>{
    const mysql = cds.connect.to ('mysql')
    const { BusinessPartner } = mysql.entities
    return mysql.run (SELECT.from(BusinessPartner))
  })
  */
  srv.before('READ', Books, async req => {
    console.log("before READ Books: " + JSON.stringify(req.data))
    var logonName = req.user.id
    if(logonName === 'error@example.com') {
      req.error(403, `user ${logonName} isn't assigned to any role`)
    } else {
      return
    }
  })

  srv.after('READ', Books, (each)=>{
    if(typeof each.author !== 'undefined') {
      if(each.author !== null) {
        each.semanticURLtoAuthor = '#Authors-display?ID=' + each.author.ID
      }
      // console.log(each.semanticURLtoAuthor)
    }
  })

  srv.on('READ', 'UserScopes', async req => { 
    const users = [
      {
        username: req.user.id,
        is_admin: req.user.is('admin'),
        is_roleadmin: req.user.is('roleadmin'),
        is_booksadmin: req.user.is('booksadmin')
      }
    ]
    return users
  })
}

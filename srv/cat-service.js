module.exports = (srv) => {

  const { Books } = srv.entities

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

  srv.on('READ','BusinessPartner', (req)=>{
    const mysql = cds.connect.to ('mysql')
    const { BusinessPartner } = mysql.entities
    return mysql.run (SELECT.from(BusinessPartner))
  })

  srv.after('READ',Books, (each)=>{
    if(typeof each.author !== 'undefined') {
      each.semanticURLtoAuthor = '#Authors-manage?ID=' + each.author.ID
      // console.log(each.semanticURLtoAuthor)
    }
  })  

}

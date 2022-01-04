module.exports = cds.service.impl(async function () {
  const salesOrder = await cds.connect.to("ZSOCDS_SRV");
  var session = {};
  const timeout = 1500; // 25 minutes

  async function getCustomerForEmail(req) {
    try {
      // Do we already have a session for this user or has the timeout been reached?
      if (
        !session[req.user.id] ||
        new Date().getTime() - timeout * 1000 > session[req.user.id].started
      ) {
        /*
        const path = "CustomerContact?$filter=mail eq " + `'${req.user.id}'`;
        const result = await salesOrder.transaction().send({ query: path });
        // Store the session
        session[req.user.id] = {
          Customer: result[0].CustomerContact.Customer,
          started: new Date().getTime(),
        };
        */
        // Dummy implementation without Backend
        if (req.user.id === "bob") {
          session[req.user.id] = {
            Customer: "100000000",
            started: new Date().getTime(),
          };
        }
      }
      return session[req.user.id].Customer;
    } catch (error) {
      console.error("Error Message: " + error.message);
      if (error.request && error.request.path) {
        console.error("Request Path: " + error.request.path);
        console.error("Response Status: " + error.response.status);
        console.error("Response Status: " + error.response.statusText);
      }
    }
  }

  this.before("READ", "*", async (req) => {
    console.log("Before READ");
    let customer = await getCustomerForEmail(req);
    if (customer) {
      req.query.SELECT.where[3].val = customer;
    } else {
      req.error("No customer mapping found");
    }
  });

  this.on("READ", "SEPM_I_SalesOrder_E", (req) => {
    return salesOrder.run(req.query);
  });

  this.on("READ", "SEPM_I_SalesOrderItem_E", (req) => {
    return salesOrder.run(req.query);
  });
});

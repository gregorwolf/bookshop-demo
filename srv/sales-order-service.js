module.exports = cds.service.impl(async function () {
  const salesOrder = await cds.connect.to("ZSOCDS_SRV");

  this.on("READ", "SEPM_I_SalesOrder_E", (req) => {
    return salesOrder.run(req.query);
  });

  this.on("READ", "SEPM_I_SalesOrderItem_E", (req) => {
    return salesOrder.run(req.query);
  });
});

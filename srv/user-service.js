const cds = require("@sap/cds");
const LOG = cds.log("user-service");

module.exports = async function (srv) {
  srv.on("READ", "UserDetails", async (req) => {
    LOG.info("UserDetails READ called");
    const external = await cds.connect.to("ZAPI_USER_NAME_SRV");
    return await external.run(req.query);
  });
};

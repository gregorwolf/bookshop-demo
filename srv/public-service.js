const cds = require("@sap/cds");
const LOG = cds.log("public-service");

module.exports = async function (srv) {
  srv.on("getLocale", async (req) => {
    LOG.info("getLocale called");
    return req.locale;
  });
};

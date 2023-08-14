const cds = require("@sap/cds");
const LOG = cds.log("sac-service");

module.exports = async function (srv) {
  const external = await cds.connect.to("Planned_Events_Sample");

  srv.on("READ", ["State"], async (req) => {
    try {
      return await external.run(req.query);
    } catch (error) {
      LOG.error("Remote request failed");
      throw error;
    }
  });
};

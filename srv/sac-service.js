const cds = require("@sap/cds");
const LOG = cds.log("sac-service");
const { executeHttpRequest, getDestination } = require("@sap-cloud-sdk/core");

module.exports = async function (srv) {
  const external = await cds.connect.to("Planned_Events_Sample");

  srv.on("getEntities", async (req) => {
    LOG.info("getEntities");
    const response = await executeHttpRequest(
      { destinationName: "sac" },
      {
        url: "/api/v1/dataexport/providers/sac/sap.epm.Planned_Events_Sample:Planned_Events_Sample/",
      }
    );
    return response.data;
  });

  srv.on("getStates", async (req) => {
    LOG.info("getStates");
    const response = await executeHttpRequest(
      { destinationName: "sac" },
      {
        url: "/api/v1/dataexport/providers/sac/sap.epm.Planned_Events_Sample:Planned_Events_Sample/State_66z5a03o60Master",
      }
    );
    return response.data;
  });

  srv.on("READ", "States", async (req) => {
    try {
      return await external.run(req.query);
    } catch (error) {
      LOG.error("Remote request failed");
      throw error;
    }
  });
};

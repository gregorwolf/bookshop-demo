const cds = require("@sap/cds");
const LOG = cds.log("sac-service");
const { executeHttpRequest, getDestination } = require("@sap-cloud-sdk/core");
const { exit } = require("@sap/cds/lib");

module.exports = async function (srv) {
  const external = await cds.connect.to("Planned_Events_Sample");
  const sacImport = await cds.connect.to("sac-dataimport");

  srv.on("importData", async (req) => {
    LOG.info("importData");
    const models = await sacImport.get("/models");
    const modelID = models.models[0].modelID;
    LOG.info("modelID:", modelID);
    const model = await sacImport.get(`/models/${modelID}`);
    const job = await sacImport.post(`/models/${modelID}/masterData`, {});
    const jobID = job.jobID;
    LOG.info("created job with ID: ", jobID);
    const data = {
      Mapping: {
        Account_Planned__66z5a03o60___ID: "Account_Planned_ID",
        State_66z5a03o60___ID: "State_ID",
        State_66z5a03o60___Description: "State_Description",
        City_4t38560363___ID: "City_ID",
        Event_672z323k1f___ID: "Event_ID",
        Date_5x2a25042z___ID: "Date_ID",
        Version_Planned_66z5a03_V___ID: "Version_Planned_ID",
      },
      DefaultValues: {},
      Data: [
        {
          Account_Planned_ID: "1",
          State_ID: "6",
          State_Description: "South Carolina",
          City_ID: "3",
          Event_ID: "4",
          Date_ID: "202001",
          Version_Planned_ID: "1",
        },
      ],
    };
    const jobData = await sacImport.post(`/jobs/${jobID}`, data);
    LOG.info("Uploaded data for job");
    let jobStatus = {};
    do {
      jobStatus = await sacImport.get(`/jobs/${jobID}`);
      LOG.info("jobStatus:", jobStatus);
      if (jobStatus.status === "READY_FOR_VALIDATION") break;
    } while (true);
    LOG.info("Ready for validation");
    const jobValidation = await sacImport.post(`/jobs/${jobID}/validate`, {});
    LOG.info("Validation started");
    do {
      jobStatus = await sacImport.get(`/jobs/${jobID}`);
      LOG.info("jobStatus:", jobStatus);
      if (jobStatus.status === "READY_FOR_WRITE") break;
    } while (true);
    LOG.info("Ready for write");
    const jobWrite = await sacImport.post(`/jobs/${jobID}/run`, {});
    LOG.info("Write started");
    do {
      await sleep(5000);
      jobStatus = await sacImport.get(`/jobs/${jobID}`);
      LOG.info("jobStatus:", jobStatus);
      if (jobStatus.status === "COMPLETED") break;
    } while (true);
    LOG.info("Completed");
    return jobID;
  });

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

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

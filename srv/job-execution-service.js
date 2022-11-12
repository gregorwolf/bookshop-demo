const cds = require("@sap/cds");
const LOG = cds.log("job-execution");
const FINISHED = "F";
const ERROR = "E";

class JobExecutionService extends cds.ApplicationService {
  async init() {
    this.on("triggerExecution", async (req) => {
      LOG.debug(`triggerExecution`);
      execute(req.data.ID);
    });

    await super.init();
  }
}

async function execute(ID) {
  const db = await cds.connect.to("db");
  const jobService = await cds.connect.to("JobService");
  const { Jobs } = db.entities("my.job");
  LOG.info(`Execution of ${ID} started`);
  const job = await jobService.run(
    SELECT.one.from(Jobs).where({
      ID,
    })
  );
  LOG.debug("Content in DB for job:", job);
  await sleep(5000);
  LOG.info(`Execution of ${ID} finished`);
  try {
    jobService.setJobStatus(ID, FINISHED);
    /*
    const updateRes = await tx.run(
      UPDATE(Jobs).set({ status_code: FINISHED, end: Date.now() }).where({ ID })
    );
    */
  } catch (error) {
    LOG.error("An error occured", error);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { JobExecutionService };

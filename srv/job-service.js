const cds = require("@sap/cds");
LOG = cds.log("job");

const QUEUED = "Q";
const FINISHED = "F";
const ERROR = "E";
const RUNNING = "R";
class JobService extends cds.ApplicationService {
  async init() {
    const db = await cds.connect.to("db");
    const { Jobs } = db.entities("my.job");

    this.before("READ", Jobs, (req) => {
      LOG.info(`before READ Jobs`);
    });

    this.on("READ", Jobs, async (req) => {
      LOG.info(`on READ Jobs`);
      const tx = db.transaction({});
      await tx.begin();
      const jobs = await tx.run(req.query);
      await tx.commit();
      return jobs;
    });

    this.on("scheduleJob", async (req) => {
      LOG.debug(`scheduleJob`);
      const tx = db.tx({});
      const { selection } = req.data;
      try {
        const insertRes = await tx.run(
          INSERT.into(Jobs).entries({ selection, status_code: QUEUED })
        );
        // Fix Object result
        // https://answers.sap.com/questions/13734900/sap-cap-cql-insert-result-object-is-different-depe.html
        const selectRes = await tx.run(
          SELECT.from(Jobs).where([...insertRes][0])
        );
        await tx.commit();
        const job = selectRes[0];
        cds.spawn({}, start);
        return job;
      } catch (error) {
        tx.rollback();
        req.error({ msg: "Transaction needed to be rolled back" });
        return;
      }
    });

    this.on("startQueuedJobs", async (req) => {
      LOG.debug(`startQueuedJobs`);
      cds.spawn({}, start);
    });

    this.on("triggerExecution", async (req) => {
      LOG.debug(`triggerExecution`);
      execute(req.data.ID);
    });

    this.on("setJobStatus", async (req) => {
      LOG.debug(`setJobStatus`);
      const ID = req.data.ID;
      const updateRes = await db.run(
        UPDATE(Jobs)
          .set({ status_code: req.data.status, end: Date.now() })
          .where({ ID })
      );
    });

    cds.spawn({ every: 5000 }, start);

    await super.init();
  }
}

async function start(tx) {
  // Check Jobs that are queued
  const { Jobs } = tx.entities("my.job");
  await tx.begin();
  const jobs = await tx.run(
    SELECT.from(Jobs).where({ status_code: QUEUED }).orderBy("createdAt asc")
  );
  await tx.commit();
  for (job of jobs) {
    // Is a job with the same selection running?
    await tx.begin();
    const runningjobs = await tx.run(
      SELECT.from(Jobs).where({
        selection: job.selection,
        status_code: RUNNING,
      })
    );
    await tx.commit();
    LOG.debug("runningjob:", runningjobs);
    if (runningjobs.length === 0) {
      try {
        await tx.begin();
        const updateRes = await tx.run(
          UPDATE(Jobs)
            .set({ status_code: RUNNING, start: Date.now() })
            .where({ ID: job.ID })
        );
        await tx.commit();
        const jobService = await cds.connect.to("JobService");
        await jobService.triggerExecution(job.ID);
        // execute(job.ID);
      } catch (error) {
        tx.rollback();
        LOG.error("Transaction needed to be rolled back", error);
      }
    } else {
      LOG.info(
        `Another Job wth the same selection of ${job.selection} is already running`
      );
    }
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
  await sleep(10000);
  LOG.info(`Execution of ${ID} finished`);
  try {
    jobService.setJobStatus(ID, FINISHED);
    /*
    const updateRes = await tx.run(
      UPDATE(Jobs).set({ status_code: FINISHED, end: Date.now() }).where({ ID })
    );
    */
  } catch (error) {
    tx.rollback();
    LOG.error("Transaction needed to be rolled back", error);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { JobService };

const cds = require("@sap/cds");
LOG = cds.log("job");
class JobService extends cds.ApplicationService {
  async init() {
    const db = await cds.connect.to("db");
    const { Jobs } = db.entities("my.job");

    this.on("scheduleJob", async (req) => {
      const tx = db.tx({});
      const { selection } = req.data;
      try {
        const insertRes = await tx.run(
          INSERT.into(Jobs).entries({ selection, status_code: "Q" })
        );
        await tx.commit();
        // Fix Object result
        // https://answers.sap.com/questions/13734900/sap-cap-cql-insert-result-object-is-different-depe.html
        const selectRes = await db.run(
          SELECT.from(Jobs).where([...insertRes][0])
        );
        const job = selectRes[0];
        cds.spawn({}, start);
        return job;
      } catch (error) {
        tx.rollback();
        req.error({ msg: "Transaction needed to be rolled back" });
        return;
      }
    });
    cds.spawn({ every: 5000 }, start);

    await super.init();
  }
}

async function start(tx) {
  // Check Jobs that are queued
  const { Jobs } = tx.entities("my.job");
  const jobs = await tx.run(SELECT.from(Jobs).where({ status_code: "Q" }));
  jobs.forEach(async (job) => {
    // Is a job with the same selection running?
    const runningjobs = await tx.run(
      SELECT.from(Jobs).where({ selection: job.selection, status_code: "R" })
    );
    LOG.debug("runningjob:", runningjobs);
    if (runningjobs.length === 0) {
      try {
        await tx.begin();
        const updateRes = await tx.run(
          UPDATE(Jobs)
            .set({ status_code: "R", start: Date.now() })
            .where({ ID: job.ID })
        );
        await tx.commit();
        await execute(tx, job.ID);
      } catch (error) {
        tx.rollback();
        LOG.error("Transaction needed to be rolled back", error);
      }
    } else {
      LOG.info(
        `Another Job wth the same selection of ${job.selection} is already running`
      );
    }
  });
}

async function execute(tx, ID) {
  const { Jobs } = tx.entities("my.job");
  LOG.info(`Execution of ${ID} started`);
  await sleep(10000);
  LOG.info(`Execution of ${ID} finished`);
  try {
    await tx.begin();
    const updateRes = await tx.run(
      UPDATE(Jobs).set({ status_code: "F", end: Date.now() }).where({ ID })
    );
    await tx.commit();
  } catch (error) {
    tx.rollback();
    LOG.error("Transaction needed to be rolled back", error);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { JobService };

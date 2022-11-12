using my.job as db from '../db/job';

service JobService @(requires : ['job']) {
  @readonly
  entity Jobs as projection on db.Jobs;

  action scheduleJob(selection : db.selection) returns Jobs;
  action startQueuedJobs();
  action setJobStatus(ID : UUID, status : db.StatusCode)
}

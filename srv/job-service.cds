using my.job as db from '../db/job';

service JobService @(requires : ['admin']) {
  @readonly
  entity Jobs as projection on db.Jobs;

  action scheduleJob(selection : db.selection) returns Jobs;
  action startQueuedJobs();
  action triggerExecution(ID : UUID);
  action setJobStatus(ID : UUID, status : db.StatusCode)
}

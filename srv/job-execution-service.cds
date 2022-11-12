using my.job as db from '../db/job';

service JobExecutionService @(requires : ['job-execution']) {
  action triggerExecution(ID : UUID);
}

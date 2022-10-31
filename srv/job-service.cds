using my.job as db from '../db/job';
using {sap} from '@sap/cds/common';

service JobService @(requires : ['admin']) {
  @readonly
  entity Jobs as projection on db.Jobs;

  action scheduleJob(selection : db.selection) returns Jobs;
  action startQueuedJobs();
}

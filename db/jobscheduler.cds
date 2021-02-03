namespace my.bookshop;

type Jobs {
  action           : String;
  active           : Boolean;
  ACTIVECOUNT      : Integer;
  createdAt        : String;
  description      : String;
  endTime          : String;
  httpMethod       : String;
  INACTIVECOUNT    : Integer;
  jobId            : Integer;
  jobType          : String;
  name             : String;
  signatureVersion : Integer;
  startTime        : String;
  subDomain        : String;
  user             : String;
  _id              : Integer;
}

type Schedules {
  active         : Boolean;
  cron           : String;
  data           : String;
  description    : String;
  endTime        : String;
  nextRunAt      : String;
  repeatAt       : String;
  repeatInterval : String;
  scheduleId     : String;
  startTime      : String;
  time           : String;
  type           : String;
}

type RunLogs {
  runId               : String;
  httpStatus          : Integer;
  executionTimestamp  : String;
  runStatus           : String;
  runState            : String;
  statusMessage       : String;
  scheduleTimestamp   : String;
  completionTimestamp : String;
  runText             : String;
}

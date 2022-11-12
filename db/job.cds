namespace my.job;

using {
  managed,
  cuid,
  sap.common.CodeList
} from '@sap/cds/common';

type selection  : String;
type StatusCode : String(1);

entity Jobs : cuid, managed {
  selection : selection;
  start     : Timestamp;
  end       : Timestamp;
  status    : Association to one Status
}

entity Status : CodeList {
  key code : StatusCode;
}

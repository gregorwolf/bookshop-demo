using {
  temporal,
  cuid
} from '@sap/cds/common';

namespace temporal;

entity Employees : cuid {
  givenName : String(40);
  lastName  : String(40);
  jobs      : Composition of many WorkAssignments
                on jobs.empl = $self;
  job1      : Association to one /*of*/ WorkAssignments;
}

@Temporal.TemporalSupport : {
  $Type           : 'Temporal.TemporalSupportType',
  ApplicationTime : {
    $Type               : 'Temporal.GranularityDate',
    SupportedQueries    : #TimeTravel,
    ClosedClosedPeriods : false,
  },
}
@Temporal.From            : validFrom
@Temporal.To              : validTo
entity WorkAssignments : cuid, temporal {
  role : String(111);
  empl : Association to Employees;
  dept : Association to Departments;
}

entity Departments : cuid {
  name : String(111);
  head : Association to Employees;
}

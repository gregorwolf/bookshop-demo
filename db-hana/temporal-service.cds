using {temporal} from '../db/temporal';
using {TemporalService} from '../srv/temporal-service';

extend service TemporalService with {
  entity WorkAssignmentsForKeyDate(keyDate : Date) as
    select
      key WorkAssignments.role,
          WorkAssignments.empl.ID as emplID,
          WorkAssignments.dept.ID as deptID,
          WorkAssignments.validFrom,
      key WorkAssignments.validTo
    from temporal.WorkAssignments
    where
          WorkAssignments.validFrom <= : keyDate
      and WorkAssignments.validTo   >= : keyDate;
}

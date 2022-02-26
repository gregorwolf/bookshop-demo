using {temporal} from '../db/temporal';

service TemporalService {

  entity Employees       as projection on temporal.Employees;
  entity Departments     as projection on temporal.Departments;
  entity WorkAssignments as projection on temporal.WorkAssignments;

}

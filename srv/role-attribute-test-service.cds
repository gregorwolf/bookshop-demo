using {
  managed,
  cuid,
} from '@sap/cds/common';

service RoleAttributeTestService {

  @(restrict : [{
    grant : 'READ',
    to    : [
      'withdot.role',
      'withslash/role',
      'withhypen-role',
      'withunderscore_role'
    ],
    where : 'level = $user.withdot.attribue'
  }, ])
  entity withdot : cuid, managed {
    level : String(5)
  };

  @(restrict : [{
    grant : 'READ',
    where : 'level = $user.withslash/attribue'
  }, ])
  entity withslash : cuid, managed {
    level : String(5)
  };

  @(restrict : [{
    grant : 'READ',
    where : 'level = $user.withhypen-attribue'
  }, ])
  entity withhypen : cuid, managed {
    level : String(5)
  };

  @(restrict : [{
    grant : 'READ',
    where : 'level = $user.withunderscore_attribue'
  }, ])
  entity ithunderscore : cuid, managed {
    level : String(5)
  };
}

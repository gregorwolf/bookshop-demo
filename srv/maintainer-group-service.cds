using my.bookshop as my from '../db/maintainer-group';
using {sap} from '@sap/cds/common';

@(requires : 'admin')
service MaintainerGroupService {
  @odata.draft.enabled
  @Common.SideEffects #employeeChange : {
    SourceProperties : [maintainers.employee_ID],
    TargetEntities   : [maintainers]
  }
  entity MaintainerGroup as projection on my.MaintainerGroup;

  entity Maintainer      as projection on my.Maintainer;
}

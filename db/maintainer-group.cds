using {
  cuid,
  managed,
  sap.common.CodeList as CodeList
} from '@sap/cds/common';

using my.bookshop.Employee from './roles';

namespace my.bookshop;

@cds.odata.valuelist
@fiori.draft.enabled
entity MaintainerGroup : cuid, managed {
  @mandatory
  description : localized String not null @(title: '{i18n>MaintainerGroupDescription}');
  responsible : Employee                  @(title: '{i18n>responsible}');
  maintainers : Composition of many Maintainer
                  on maintainers.group = $self;
}

@cds.autoexpose
entity Maintainer : cuid {
  @mandatory
  employee : Employee not null;

  @mandatory
  group    : Association to MaintainerGroup not null;
}

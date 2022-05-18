using {
  cuid,
  sap.common.CodeList
} from '@sap/cds/common';

namespace directory;

aspect directory {
  directory : String(10) @cds.on.insert : $session.directory;
  version   : Integer    @cds.on.insert : $session.version;
}

entity Process : cuid, directory {
  name        : String(100);
  processType : Association to ProcessType;
}

entity ProcessType : cuid, directory, CodeList {

}

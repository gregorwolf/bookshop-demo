using {
  cuid,
  managed,
  User,
  sap.common.CodeList
} from '@sap/cds/common';

namespace directory;

aspect directory {
  directory : String(10);
  version   : Integer;
}

@assert.unique : {user : [createdBy], }
entity Session : managed, directory {
  key user : User @cds.on.insert : $user;
}

entity Process : cuid, directory {
  name        : String(100);
  processType : Association to ProcessType;
}

entity ProcessType : cuid, directory, CodeList {

}

entity ProcessView     as projection on Process where directory = SESSION_CONTEXT('DIRECTORY')
and                                                   version   = SESSION_CONTEXT('VERSION');

entity ProcessTypeView as projection on ProcessType where directory = SESSION_CONTEXT('DIRECTORY')
and                                                       version   = SESSION_CONTEXT('VERSION');

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

/*
// Works only with HANA and a catch all before handler that sets the SESSION_CONTEXT
entity ProcessView     as projection on Process where directory = SESSION_CONTEXT('DIRECTORY')
and                                                   version   = SESSION_CONTEXT('VERSION');

entity ProcessTypeView as projection on ProcessType where directory = SESSION_CONTEXT('DIRECTORY')
and                                                       version   = SESSION_CONTEXT('VERSION');
*/

// Also works only with HANA but does only need a before handler that checks that the Session is set for the user

entity ProcessView     as projection on Process where directory = (
    select directory from Session
    where
      user = $user
  )
  and                                                 version   = (
      select version from Session
      where
        user = $user
    );

entity ProcessTypeView as projection on ProcessType where directory = (
    select directory from Session
    where
      user = $user
  )
  and                                                     version   = (
      select version from Session
      where
        user = $user
    );

using {directory} from '../db/directory';

@(requires : 'authenticated-user')
service DirectoryService {
  @(restrict : [{
    grant : 'READ',
    where : 'directory = (select directory from directory.Session where user = $user) AND version = (select version from directory.Session where user = $user)'
  }])
  entity Process     as projection on directory.Process;

  @(restrict : [{
    grant : 'READ',
    where : 'directory = (select directory from directory.Session where user = $user) AND version = (select version from directory.Session where user = $user)'
  }])
  entity ProcessType as projection on directory.ProcessType;

  entity Version {
    key version : Integer;
  }

  entity Session     as projection on directory.Session;
}

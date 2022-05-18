using {directory} from '../db/directory';

@(requires : 'authenticated-user')
service DirectoryService {
  @(restrict : [{
    grant : 'READ',
    where : 'directory = $user.directory AND version = $user.version'
  }])
  entity Process     as projection on directory.Process;

  @(restrict : [{
    grant : 'READ',
    where : 'directory = $user.directory AND version = $session.version'
  }])
  entity ProcessType as projection on directory.ProcessType;

  entity Version {
    key version : Integer;
  }
}

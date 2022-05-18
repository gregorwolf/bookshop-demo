using {directory} from '../db/directory';

@(requires : 'authenticated-user')
service DirectoryViewService {
  @(restrict : [
    {
      grant : 'CREATE',
      to    : 'authenticated-user'
    },
    {
      grant : [
        'READ',
        'WRITE'
      ],
      where : 'user = $user'
    },
  ])
  entity Session     as projection on directory.Session;

  entity Process     as projection on directory.ProcessView;
  entity ProcessType as projection on directory.ProcessTypeView;
}

using AdminService from '../../../srv/admin-service';

annotate AdminService.Users with @(
  UI: {
    SelectionFields: [ username ],

    LineItem: [
      { Value: username },
      { Value: role_ID }
    ],
    HeaderInfo: {
      TypeName: 'User', TypeNamePlural: 'Users',
      Title: {
        Label: 'User name ', //A label is possible but it is not considered on the ObjectPage yet
        Value: username
      },
      Description: {Value: username}
    },

    Identification: [
      {Value: username },
    ],

    Facets: [
      {$Type: 'UI.ReferenceFacet', Label: '{i18n>General}', Target: '@UI.FieldGroup#General'},
    ],
    
    FieldGroup#General: {
      Data: [
        {Value: username},
        {Value: role.rolename},
      ]
    },
  },
);
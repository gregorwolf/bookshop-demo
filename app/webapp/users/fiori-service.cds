using AdminService from '../../../srv/admin-service';

annotate AdminService.Users with @(UI : {
  SelectionFields      : [username],

  LineItem             : [
    {Value : username},
    {Value : role_ID}
  ],
  HeaderInfo           : {
    TypeName       : 'User',
    TypeNamePlural : 'Users',
    Title          : {
      Label : 'User name ', //A label is possible but it is not considered on the ObjectPage yet
      Value : username
    },
    Description    : {Value : username}
  },

  Identification       : [{Value : username}, ],

  Facets               : [
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : '{i18n>General}',
      Target : '@UI.FieldGroup#General'
    },
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : '{i18n>Employee}',
      Target : '@UI.FieldGroup#Employee'
    },
  ],

  FieldGroup #General  : {Data : [
    {Value : username},
    {Value : role.rolename},
  ]},
  FieldGroup #Employee : {Data : [
    {Value : employee_ID},
    {Value : employee.firstName},
    {Value : employee.lastName},
    {Value : employee.company},
    {Value : employee.department},
    {Value : employee.email},
  ]},
}, ) {
  employee
  @ValueList.entity : 'Employee'
  @Common           : {
    Text                     : employee.email,
    TextArrangement          : #TextOnly,
    ValueListWithFixedValues : false,
    ValueList                : {
      CollectionPath : 'Employee',
      Parameters     : [
        {
          $Type             : 'Common.ValueListParameterInOut',
          LocalDataProperty : employee_ID,
          ValueListProperty : 'ID'
        },
        {
          $Type             : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'firstName'
        },
        {
          $Type             : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'lastName'
        },
        {
          $Type             : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'company'
        },
        {
          $Type             : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'department'
        },
        {
          $Type             : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'email'
        }
      ]
    }
  };
}

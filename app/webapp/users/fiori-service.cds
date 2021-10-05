using AdminService from '../../../srv/admin-service';

annotate AdminService.Users with @(UI : {
  SelectionFields         : [username],

  LineItem                : [
    {Value : username},
    {Value : role_ID}
  ],
  HeaderInfo              : {
    TypeName       : 'User',
    TypeNamePlural : 'Users',
    Title          : {
      Label : 'User name ', //A label is possible but it is not considered on the ObjectPage yet
      Value : username
    },
    Description    : {Value : username}
  },

  Identification          : [{Value : username}, ],

  Facets                  : [
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
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : '{i18n>Responsible}',
      Target : '@UI.FieldGroup#Responsible'
    },
  ],

  FieldGroup #General     : {Data : [
    {Value : username},
    {Value : role.rolename},
  ]},
  FieldGroup #Employee    : {Data : [
    {Value : employee_ID},
    {Value : employee.firstName},
    {Value : employee.lastName},
    {Value : employee.company},
    {Value : employee.department},
    {Value : employee.email},
  ]},
  FieldGroup #Responsible : {Data : [
    {Value : responsible_ID},
    {Value : responsible.firstName},
    {Value : responsible.lastName},
    {Value : responsible.company},
    {Value : responsible.department},
    {Value : responsible.email},
  ]},
}, ) {
  employee @Common : {
    Text                     : employee.email,
    TextArrangement          : #TextOnly,
    ValueListWithFixedValues : false,
    ValueList                : {
      CollectionPath : 'Employees',
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
};

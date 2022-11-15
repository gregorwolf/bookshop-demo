using AdminService from '../../../srv/admin-service';

annotate AdminService.Users with @(UI : {

  SelectionPresentationVariant : {
    $Type               : 'UI.SelectionPresentationVariantType',
    Text                : 'Default',
    SelectionVariant    : {
      $Type : 'UI.SelectionVariantType',
      Text  : 'Default',
    },
    PresentationVariant : {
      $Type          : 'UI.PresentationVariantType',
      SortOrder      : [{
        Property   : username,
        Descending : true,
      }, ],
      Visualizations : ['@UI.LineItem']
    },
  },
  SelectionFields              : [username],

  LineItem                     : [
    {Value : username},
    {Value : employee.email},
  ],
  HeaderInfo                   : {
    TypeName       : 'User',
    TypeNamePlural : 'Users',
    Title          : {
      Label : 'User name ', //A label is possible but it is not considered on the ObjectPage yet
      Value : username
    },
    Description    : {Value : username}
  },

  Identification               : [{Value : username}, ],

  HeaderFacets                 : [
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : '{i18n>Created}',
      Target : '@UI.FieldGroup#Created'
    },
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : '{i18n>Modified}',
      Target : '@UI.FieldGroup#Modified'
    },
  ],

  Facets                       : [
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
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : '{i18n>Roles}',
      Target : 'roles/@UI.LineItem'
    },
  ],

  FieldGroup #General          : {Data : [
    {Value : username},
    {Value : validFrom},
    {Value : validTo},
  ]},
  FieldGroup #Created          : {Data : [
    {Value : createdBy},
    {Value : createdAt},
  ]},
  FieldGroup #Modified         : {Data : [
    {Value : modifiedBy},
    {Value : modifiedAt},
  ]},
  FieldGroup #Employee         : {Data : [
    {
      Value : employee_ID,
      Label : '{i18n>EmployeeID}'
    },
    {Value : employee.firstName},
    {Value : employee.lastName},
    {Value : employee.company},
    {Value : employee.department},
    {Value : employee.email},
  ]},
  FieldGroup #Responsible      : {Data : [
    {Value : responsible_ID},
    {Value : responsible.firstName},
    {Value : responsible.lastName},
    {Value : responsible.company},
    {Value : responsible.department},
    {Value : responsible.email},
  ]},
}, ) {
  responsible @Common : {
    Text                     : responsible.email,
    TextArrangement          : #TextOnly,
    ValueListWithFixedValues : false,
  };
  employee    @Common : {
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

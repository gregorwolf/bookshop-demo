using my.bookshop as my from '../../../db/maintainer-group';

annotate my.MaintainerGroup with {
  ID @Core.Computed;
}

annotate my.Maintainer with {
  ID @Core.Computed;
}

annotate my.MaintainerGroup with @(UI: {
  Identification         : [{Value: description}],
  SelectionFields        : [description],
  LineItem               : [
    {Value: description},
    {Value: createdAt},
    {Value: createdBy},
    {Value: modifiedAt},
    {Value: responsible_ID},
  ],
  HeaderInfo             : {
    TypeName      : '{i18n>maintainerGroup}',
    TypeNamePlural: '{i18n>maintainerGroups}',
    Title         : {Value: description}
  },
  Facets                 : [
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>description}',
      Target: '@UI.FieldGroup#Description'
    },
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>maintainers}',
      Target: 'maintainers/@UI.LineItem'
    },
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>Translations}',
      Target: 'texts/@UI.LineItem'
    }
  ],
  FieldGroup #Description: {Data: [
    {Value: description},
    {Value: responsible_ID},
  ]}
}, ) {
  responsible @Common: {
    Text           : responsible.email,
    TextArrangement: #TextOnly,
  }
};

annotate my.Maintainer with @(UI: {
  SelectionFields    : [employee.email, ],
  PresentationVariant: {$Type: 'UI.PresentationVariantType'},
  LineItem           : [
    {Value: employee_ID},
    {Value: employee.firstName, },
    {Value: employee.lastName},
    {Value: employee.company},
    {Value: employee.department},
  ]
}, ) {
  employee @Common: {
    Text                     : employee.email,
    TextArrangement          : #TextOnly,
    ValueListWithFixedValues : false,
    ValueListMapping #default: {
      CollectionPath: 'Employees',
      Label         : 'Default',
      Parameters    : [
        {
          $Type            : 'Common.ValueListParameterInOut',
          LocalDataProperty: employee_ID,
          ValueListProperty: 'ID'
        },
        {
          $Type            : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty: 'firstName'
        },
        {
          $Type            : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty: 'lastName'
        },
        {
          $Type            : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty: 'email'
        }
      ]
    },
    ValueListMapping #byName : {
      CollectionPath: 'Employees',
      Label         : 'By Name',
      Parameters    : [
        {
          $Type            : 'Common.ValueListParameterInOut',
          LocalDataProperty: employee_ID,
          ValueListProperty: 'ID'
        },
        {
          $Type            : 'Common.ValueListParameterFilterOnly',
          ValueListProperty: 'firstName'
        },
        {
          $Type            : 'Common.ValueListParameterFilterOnly',
          ValueListProperty: 'lastName'
        },
        {
          $Type            : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty: 'firstName'
        },
        {
          $Type            : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty: 'lastName'
        },
        {
          $Type            : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty: 'email'
        }
      ]
    }
  };
};

annotate my.MaintainerGroup.texts with @(UI: {
  Identification : [{Value: description}],
  SelectionFields: [
    locale,
    description
  ],
  LineItem       : [
    {
      Value: locale,
      Label: '{i18n>locale}'
    },
    {
      Value: description,
      Label: '{i18n>description}'
    }
  ]
}) {
  ID     @Core.Computed: false;
  locale @ValueList    : {
    entity: 'Languages',
    type  : #fixed
  }
};

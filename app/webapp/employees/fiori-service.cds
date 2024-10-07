using AdminService from '../../../srv/admin-service';

annotate AdminService.Employees with @(UI: {

  SelectionPresentationVariant: {
    $Type              : 'UI.SelectionPresentationVariantType',
    Text               : 'Default',
    SelectionVariant   : {
      $Type: 'UI.SelectionVariantType',
      Text : 'Default',
    },
    PresentationVariant: {
      $Type         : 'UI.PresentationVariantType',
      SortOrder     : [{
        Property  : lastName,
        Descending: true,
      }, ],
      Visualizations: ['@UI.LineItem']
    },
  },
  SelectionFields             : [lastName],

  LineItem                    : [
    {Value: lastName},
    {Value: firstName},
    {Value: email},
  ],
  HeaderInfo                  : {
    TypeName      : 'Employee',
    TypeNamePlural: 'Employees',
    Title         : {
      Label: 'Employee', //A label is possible but it is not considered on the ObjectPage yet
      Value: lastName
    },
    Description   : {Value: firstName}
  },

  Identification              : [
    {Value: lastName},
    {Value: firstName},
  ],

  HeaderFacets                : [
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>Created}',
      Target: '@UI.FieldGroup#Created'
    },
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>Modified}',
      Target: '@UI.FieldGroup#Modified'
    },
  ],

  Facets                      : [
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>General}',
      Target: '@UI.FieldGroup#General'
    },
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>Users}',
      Target: 'users/@UI.LineItem'
    },
  ],

  FieldGroup #General         : {Data: [
    {Value: lastName},
    {Value: firstName},
  ]},
  FieldGroup #Created         : {Data: [
    {Value: createdBy},
    {Value: createdAt},
  ]},
  FieldGroup #Modified        : {Data: [
    {Value: modifiedBy},
    {Value: modifiedAt},
  ]},
}, ) {

};

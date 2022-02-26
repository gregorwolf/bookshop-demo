using TemporalService from '../../../srv/temporal-service';

annotate TemporalService.WorkAssignments with @(UI : {
  SelectionFields     : [
    role,
    validFrom,
    validTo
  ],

  LineItem            : [
    {Value : role},
    {Value : validFrom},
    {Value : validTo}
  ],
  HeaderInfo          : {
    TypeName       : 'Work Assignment',
    TypeNamePlural : 'Work Assignments',
    Title          : {
      Label : 'User name ', //A label is possible but it is not considered on the ObjectPage yet
      Value : role
    },
    Description    : {Value : role}
  },

  Identification      : [{Value : role}, ],

  Facets              : [{
    $Type  : 'UI.ReferenceFacet',
    Label  : '{i18n>General}',
    Target : '@UI.FieldGroup#General'
  }, ],

  FieldGroup #General : {Data : [{Value : role}, ]},
}, );

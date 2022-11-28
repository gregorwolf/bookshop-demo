namespace minimal;

using {
  cuid,
  managed
} from '@sap/cds/common';

service MinimalService {

  entity Books : cuid, managed {
    @title : '{i18n>title}'
    title : String(250);
  }

}

annotate MinimalService.Books with @odata.draft.enabled;

annotate MinimalService.Books with @(UI : {
  SelectionFields : [title],
  LineItem        : [{Value : title}, ],
  HeaderInfo      : {
    TypeName       : '{i18n>Book}',
    TypeNamePlural : '{i18n>Books}',
    Title          : {Value : title},
  },
/*
Facets              : [{
  $Type  : 'UI.ReferenceFacet',
  Label  : '{i18n>Details}',
  Target : '@UI.FieldGroup#Details'
}, ],
FieldGroup #Details : {Data : [{Value : title}, ]},
*/
});

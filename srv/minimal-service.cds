namespace minimal;

using {
  cuid,
  managed
} from '@sap/cds/common';

entity Books : cuid, managed {
  @title : '{i18n>title}'
  title            : String(250);
  @title : '{i18n>shortDescription}'
  shortDescription : String(500);
  @title : '{i18n>description}'
  @(UI : {MultiLineText, })
  description      : LargeString;
}

service MinimalService {
  entity Books as projection on minimal.Books;

}

annotate MinimalService.Books with @odata.draft.enabled;

annotate MinimalService.Books with @(UI : {
  SelectionFields     : [title],
  LineItem            : [{Value : title}, ],
  HeaderInfo          : {
    TypeName       : '{i18n>Book}',
    TypeNamePlural : '{i18n>Books}',
    Title          : {Value : title},
    Description    : {Value : shortDescription},
  },
  Facets              : [{
    $Type  : 'UI.ReferenceFacet',
    Label  : '{i18n>Details}',
    Target : '@UI.FieldGroup#Details'
  }, ],
  FieldGroup #Details : {Data : [{Value : description}, ]},
});

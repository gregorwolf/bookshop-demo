namespace minimal;

using {
  cuid,
  managed
} from '@sap/cds/common';

entity Books : cuid, managed {
  @title  : '{i18n>title}'
  title            : String(250);
  @title  : '{i18n>shortDescription}'
  shortDescription : String(500);
  @title  : 'Description'
  @(UI : {MultiLineText, })
  description      : LargeString;
  @Common : {
    Text            : author.name,
    TextArrangement : #TextOnly,
    ValueList       : {
      CollectionPath : 'Authors',
      Parameters     : [
        {
          $Type             : 'Common.ValueListParameterInOut',
          LocalDataProperty : author_ID,
          ValueListProperty : 'ID'
        },
        {
          $Type             : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'name'
        }
      ]
    }
  }
  author           : Association to one Authors
}

entity Authors : cuid {
  @title : '{i18n>name}'
  name  : String(250);
  books : Association to many Books
            on books.author = $self
}

service MinimalService {
  entity Books   as projection on minimal.Books;
  entity Authors as projection on minimal.Authors;
}

annotate MinimalService.Books with @odata.draft.enabled;

annotate MinimalService.Books with @(UI : {
  SelectionFields     : [title],
  LineItem            : [
    {Value : title},
    {Value : shortDescription},
  ],
  HeaderInfo          : {
    TypeName       : '{i18n>book}',
    TypeNamePlural : '{i18n>Books}',
    Title          : {Value : title},
    Description    : {Value : shortDescription},
  },
  Facets              : [{
    $Type  : 'UI.ReferenceFacet',
    Label  : '{i18n>Details}',
    Target : '@UI.FieldGroup#Details'
  }, ],
  FieldGroup #Details : {Data : [
    {Value : description},
    {Value : author_ID},
  ]},
});

annotate MinimalService.Authors with @odata.draft.enabled;

annotate MinimalService.Authors with @(UI : {
  LineItem   : [{Value : name}, ],
  HeaderInfo : {
    TypeName       : '{i18n>Author}',
    TypeNamePlural : '{i18n>Authors}',
    Title          : {Value : name},
  },
  Facets     : [{
    $Type  : 'UI.ReferenceFacet',
    Label  : '{i18n>Books}',
    Target : 'books/@UI.LineItem'
  }, ],
});

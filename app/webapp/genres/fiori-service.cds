using CatalogService from '../../../srv/cat-service';

////////////////////////////////////////////////////////////////////////////
//
//	Books Object Page
//
annotate CatalogService.Genres with @(UI: {
  SelectionFields    : [
    name,
    parent_ID,
  ],
  LineItem           : [
    {
      $Type: 'UI.DataField',
      Value: ID,
    },
    /*
    {
      $Type          : 'UI.DataFieldWithIntentBasedNavigation',
      Value          : ID,
      SemanticObject : 'genres',
      //SemanticObject : 'V4Authors',
      Action         : 'display',
    },
    */
    {Value: parent_ID},
    {Value: name},
    {Value: genreSemanticObject},
    {Value: nodeType},
    {Value: nodeType_FC},
  ],
  Facets             : [{
    $Type : 'UI.ReferenceFacet',
    Label : '{i18n>Details}',
    Target: '@UI.FieldGroup#Details'
  }],
  FieldGroup #Details: {Data: [
    {Value: ID},
    {Value: name},
    {Value: genreSemanticObject},
    {Value: nodeType},
    {Value: nodeType_FC},
  ]},
}) {
  @Common.FieldControl: nodeType_FC
  nodeType;
};

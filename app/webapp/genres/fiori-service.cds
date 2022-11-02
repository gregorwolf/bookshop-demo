using CatalogService from '../../../srv/cat-service';

////////////////////////////////////////////////////////////////////////////
//
//	Books Object Page
//
annotate CatalogService.Genres with @(UI : {
  SelectionFields : [
    name,
    parent_ID,
  ],
  LineItem        : [
    /*
    {
      $Type : 'UI.DataField',
      Value : ID,
    },
    */
    {
      $Type          : 'UI.DataFieldWithIntentBasedNavigation',
      Value          : ID,
      SemanticObject : 'genres',
      Action         : 'display',
    },

    {Value : parent_ID},
    {Value : name},
    {Value : genreSemanticObject},
    {Value : nodeType},
  ],
});

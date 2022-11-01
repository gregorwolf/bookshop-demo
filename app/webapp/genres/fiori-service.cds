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
    {
      $Type : 'UI.DataField',
      Value : ID,
    },
    {Value : parent_ID},
    {Value : name},
    {Value : genreSemanticObject},
  ],
});

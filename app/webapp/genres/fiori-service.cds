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
    {Value : ID},
    {Value : parent_ID},
    {Value : name},
  ],
});

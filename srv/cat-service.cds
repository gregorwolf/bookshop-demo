using my.bookshop as my from '../db/data-model';

service CatalogService {

  @readonly entity Books as projection on my.Books;
  @readonly entity Authors as projection on my.Authors;

  @insertonly entity Orders as projection on my.Orders excluding {
    createdBy, modifiedBy
  };

}

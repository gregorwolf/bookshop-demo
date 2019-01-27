using my.bookshop as my from '../db/data-model';

service CatalogService {

  @readonly entity Books as projection on my.Books excluding {
    createdBy, modifiedBy
  };

  @readonly entity Authors as projection on my.Authors excluding {
    createdBy, modifiedBy
  };

  @requires: 'authenticated-user'
  @insertonly entity Orders as projection on my.Orders;
}

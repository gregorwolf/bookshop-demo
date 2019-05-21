using my.bookshop as db from '../db/schema';

service CatalogService {

  @readonly entity Books as projection on db.Books excluding {
    createdBy, modifiedBy
  };

  @readonly entity Authors as projection on db.Authors excluding {
    createdBy, modifiedBy
  };

  @requires: 'authenticated-user'
  @insertonly entity Orders as projection on db.Orders;
}

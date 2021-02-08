using my.bookshop as db from '../db/schema';

@cds.query.limit: 100
service PublicService {
 
  @readonly entity Books as projection on db.Books excluding {
    createdBy, modifiedBy
  };

  @readonly entity Authors as projection on db.Authors excluding {
    createdBy, modifiedBy
  };
}
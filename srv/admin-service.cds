using my.bookshop as db from '../db/schema';

service AdminService @(_requires:'admin') {
  @odata.draft.enabled
  entity Approval as projection on db.Approval;
  entity Books as projection on db.Books;
  view BooksAnalytics as select from db.BooksAnalytics;
  entity Authors as projection on db.Authors;
  entity Orders as select from db.Orders;
  annotate Orders with @odata.draft.enabled;


  //------- auto-exposed --------
  entity OrderItems as projection on db.OrderItems;
  //> these shall be removed but this would break the Fiori UI
}

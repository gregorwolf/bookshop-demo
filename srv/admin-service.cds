using my.bookshop as db from '../db/schema';

service AdminService @(_requires:'admin') {
  entity Books as projection on db.Books;
  entity Authors as projection on db.Authors;
  entity Orders as select from db.Orders;
  entity OrderItems as projection on db.OrderItems;
  annotate Orders with @odata.draft.enabled;
}

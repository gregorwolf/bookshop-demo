using my.bookshop as my from '../db/data-model';

service AdminService @(_requires:'admin') {
  entity Books as projection on my.Books;
  entity Authors as projection on my.Authors;
  entity Orders as select from my.Orders;

  // TODO: check with compiler, should be autoexposed also in service
  entity OrderItems as projection on my.OrderItems;

  annotate Orders with @odata.draft.enabled;
}

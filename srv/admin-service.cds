using my.bookshop as my from '../db/data-model';

service AdminService @(_requires:'admin') {
  entity Books as projection on my.Books;
  entity Authors as projection on my.Authors;
  entity Orders as select from my.Orders {
    *, sum(Items.netAmount) as total : Decimal(9,2),
    Items : redirected to OrderItems  //> BUG in cds compiler ?!?
  } group by ID;
  entity OrderItems as select from my.OrderItems {
    *, amount * book.price as netAmount : Decimal(9,2),
    parent : redirected to Orders   //> BUG in cds compiler ?!?
  };
  annotate Orders with @odata.draft.enabled;
}

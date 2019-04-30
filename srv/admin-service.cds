using my.bookshop as my from '../db/data-model';

service AdminService @(requires:'authenticated-user') {
  entity Books as projection on my.Books;
  entity Authors as projection on my.Authors;
  entity Orders as select from my.Orders;
  entity OrderItems as projection on my.OrderItems;
  annotate Orders with @odata.draft.enabled;
  annotate Books with @(restrict: [
    { grant: 'READ', where: 'language = $user.locale' }// Instanced based restriction
  ])
}

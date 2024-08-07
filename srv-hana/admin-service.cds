using my.bookshop as db from '../db/';
using {AdminService} from '../srv/admin-service';

extend service AdminService with {
  // parameterized view
  entity OrderReport(currency : String(3)) as
    select from db.Orders {
      key ID,
          OrderNo,
          CustomerOrderNo,
          total,
          taxPercentage,
          total * taxPercentage / 100         as tax          : Decimal(15, 2),
          total + total * taxPercentage / 100 as totalWithTax : Decimal(15, 2),
          currency,
    }
    where
      currency.code = :currency;
}

annotate AdminService.OrderReport with @(UI: {
  SelectionFields: [OrderNo, ],
  LineItem       : [
    {Value: OrderNo, },
    {Value: total, },
    {Value: taxPercentage, },
    {Value: tax, },
    {Value: totalWithTax, },
  ],
}) {};

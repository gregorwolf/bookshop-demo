using my.bookshop as db from '../db/';
using {OrderService} from '../srv/order-service';

extend service OrderService with {
  // parameterized view
  @readonly
  @(Capabilities: {FilterRestrictions: {
    $Type                       : 'Capabilities.FilterRestrictionsType',
    FilterExpressionRestrictions: [{
      Property          : 'Set/currency',
      AllowedExpressions: 'SingleValue'
    }]
  }})
  entity OrderReport(currency : String(3)) as
    select from db.Orders {
      key ID,
          OrderNo,
          CustomerOrderNo,
          total,
          taxPercentage,
          total * taxPercentage / 100         as tax          : Decimal(15, 2),
          total + total * taxPercentage / 100 as totalWithTax : Decimal(15, 2),
    }
    where
      currency.code = :currency;

}

annotate OrderService.OrderReport with @(UI: {
  SelectionFields: [OrderNo, ],
  LineItem       : [
    {Value: OrderNo, },
    {Value: taxPercentage, },
  ],
}) {};

annotate OrderService.OrderReportParameters with @Common.ResultContext;

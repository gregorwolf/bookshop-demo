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
  @Common.ResultContext #$parameters
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
      currency.code = :currency
    actions {
      action checkConsistencyWithParams();
    };

}

annotate OrderService.OrderReport with @(UI: {
  SelectionFields: [OrderNo, ],
  LineItem       : [
    {Value: OrderNo, },
    {Value: taxPercentage, },
    {
      $Type : 'UI.DataFieldForAction',
      Label : '{i18n>checkConsistencyWithParams}',
      Action: 'OrderService.checkConsistencyWithParams',
      Inline: false
    },
  ],
}) {};

annotate OrderService.OrderReportParameters with @Common.ResultContext;

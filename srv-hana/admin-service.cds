using my.bookshop as db from '../db/';
using {AdminService} from '../srv/admin-service';

extend service AdminService with {
  @Capabilities.NavigationRestrictions.RestrictedProperties: [{
    $Type             : 'Capabilities.NavigationPropertyRestriction',
    NavigationProperty: 'Set',
    FilterRestrictions: {
      $Type                       : 'Capabilities.FilterRestrictionsType',
      FilterExpressionRestrictions: [{
        $Type             : 'Capabilities.FilterExpressionRestrictionType',
        Property          : Set.currency,
        AllowedExpressions: 'SingleValue'
      }]
    }
  }]

  // parameterized view

  @(Capabilities: {FilterRestrictions: {
    $Type                       : 'Capabilities.FilterRestrictionsType',
    FilterExpressionRestrictions: [{
      Property          : 'Set/currency',
      AllowedExpressions: 'SingleValue'
    }]
  }})
  @readonly

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

annotate AdminService.OrderReport with @(UI: {
  SelectionFields: [OrderNo, ],
  LineItem       : [
    {Value: OrderNo, },
    {Value: taxPercentage, },
  ],
}) {};

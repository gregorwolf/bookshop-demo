using my.bookshop as db from '../db/schema';

service CatalogSimpleService {

  @readonly
  entity Orders as projection on db.Orders {
    ID,
    @sap.unit                      : 'currencyISOCode'
    @Semantics.amount.currencyCode : 'currencyISOCode'
    @Measures.ISOCurrency          : currencyISOCode
    total,
    @Common.IsCurrency
    @sap.semantics                 : 'currency-code'
    @Semantics.currencyCode
    currency.code as currencyISOCode, currency
  };

}

annotate CatalogSimpleService.Orders with @(UI : {
  SelectionFields : [
    ID,
    total
  ],
  LineItem        : [
    {Value : ID},
    {Value : total},
    {Value : currencyISOCode}
  ],
});

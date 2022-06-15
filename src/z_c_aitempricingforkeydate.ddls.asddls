@AbapCatalog.sqlViewName: 'ZCAITEMPRDATE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Agreement Item Pricing for Key Date'

@OData.publish: true

@UI.headerInfo: {
     typeName      : 'Agreement Item' ,
     typeNamePlural: 'Agreement Items' }


define view Z_C_AItemPricingForKeyDate
  with parameters
    keyDate : valid_at
  as select from Z_I_AgreementItemPricing
{
      @EndUserText.label: 'ID'
      @UI.selectionField.element: 'ID'
      @UI.lineItem.position: 10
  key ID,
      @EndUserText.label: 'Item'
      @UI.selectionField.element: 'Item'
      @UI.lineItem.position: 20
      Item,
      @EndUserText.label: 'Valid From'
      @UI.lineItem.position: 30
      validFrom,
      @EndUserText.label: 'Valid To'
      @UI.lineItem.position: 50
      validTo
}
where
      validFrom <= $parameters.keyDate
  and validTo   >= $parameters.keyDate;

@AbapCatalog.sqlViewName: 'ZCAITEMPRDATE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Agreement Item Pricing for Key Date'

@UI.headerInfo: {
     typeName      : 'Agreement Item' ,
     typeNamePlural: 'Agreement Items' }


define view Z_C_AItemPricingForKeyDate
  with parameters
    keyDate : datum
  as select from Z_I_AgreementItemPricing
{
      @EndUserText.label: 'ID'
      @UI.selectionField: [{ element: 'ID' }]
      @UI.lineItem: [{ position: 10 }]
  key ID,
      @EndUserText.label: 'Item'
      @UI.selectionField: [{ element: 'Item' }]
      @UI.lineItem: [{ position: 20 }]
      Item,
      @UI.selectionField: [{ element: 'validFrom' }]
      @UI.lineItem: [{ position: 30 }]
      validFrom,
      @UI.selectionField: [{ element: 'validTo' }]
      @UI.lineItem: [{ position: 40 }]
      validTo
}
where
      validFrom <= $parameters.keyDate
  and validTo   >= $parameters.keyDate;

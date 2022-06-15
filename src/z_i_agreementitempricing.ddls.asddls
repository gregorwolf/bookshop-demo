@AbapCatalog.sqlViewName: 'ZIAITEMPR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Interface View f. Agreement Item Pricing'
define view Z_I_AgreementItemPricing as select from zaitempricing {
    key id as ID,
    item as Item,
    validfrom as validFrom,
    validto as validTo
}

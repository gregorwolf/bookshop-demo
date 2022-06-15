using {agreement} from '../db/agreement';

service ZAgreementService @(path : '/sap/Z_C_AITEMPRICINGFORKEYDATE_CDS') {
  @readonly
  @Aggregation.ApplySupported          : {
    Transformations : [
      'aggregate',
      'groupby',
      'filter'
    ],
    Rollup          : 'None'
  }
  @Capabilities.FilterRestrictions     : {NonFilterableProperties : [keyDate]}
  @Capabilities.NavigationRestrictions : {RestrictedProperties : [
    {NavigationProperty : {path : Parameters}},
    {FilterRestrictions : {Filterable : false}}
  ]}
  @Capabilities.SortRestrictions       : {NonSortableProperties : [keyDate]}
  entity Z_C_AItemPricingForKeyDate(keyDate : Date not null) as
    select
      key AgreementItemPricing.ID,
          AgreementItemPricing.item.ID as Item,
          AgreementItemPricing.validFrom,
          AgreementItemPricing.validTo
    from agreement.AgreementItemPricing
    where
          AgreementItemPricing.validFrom <= : keyDate
      and AgreementItemPricing.validTo   >= : keyDate;
}

using {agreement} from '../db/agreement';
using {AgreementService} from '../srv/agreement';

extend service AgreementService with {
  @readonly
  @Aggregation.ApplySupported         : {
    Transformations: [
      'aggregate',
      'groupby',
      'filter'
    ],
    Rollup         : #None
  }
  @Capabilities.FilterRestrictions    : {NonFilterableProperties: [keyDate]}
  @Capabilities.NavigationRestrictions: {RestrictedProperties: [
    {NavigationProperty: {path: Parameters}},
    {FilterRestrictions: {Filterable: false}}
  ]}
  @Capabilities.SortRestrictions      : {NonSortableProperties: [keyDate]}
  entity AgreementItemPricingForKeyDate(keyDate : Date not null) as
    select
      key : keyDate                    as keyDate,
      key AgreementItemPricing.ID,
          AgreementItemPricing.item.ID as Item,
          @title: '{i18n>validFrom}'
          AgreementItemPricing.validFrom,
          @title: '{i18n>validTo}'
          AgreementItemPricing.validTo

    from agreement.AgreementItemPricing
    where
          AgreementItemPricing.validFrom <= : keyDate
      and AgreementItemPricing.validTo   >= : keyDate;
}
/*
annotate AgreementService.AgreementItemPricingForKeyDate @(UI.SelectionVariant #params : {
  SelectOptions : [],
  Parameters    : [{
    $Type         : 'UI.Parameter',
    PropertyName  : keyDate,
    PropertyValue : 'TODAY'
  }]
});
*/

annotate AgreementService.AgreementItemPricingForKeyDate with @(UI: {
  SelectionFields: [
    keyDate,
    ID,
  ],
  LineItem       : [
    {Value: ID, },
    {Value: Item, },
    {Value: validFrom, },
    {Value: validTo, },
  ]
}) {};

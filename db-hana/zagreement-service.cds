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
    {NavigationProperty : {$value : Parameters}},
    {FilterRestrictions : {Filterable : false}}
  ]}
  @Capabilities.SortRestrictions       : {NonSortableProperties : [keyDate]}
  entity Z_C_AItemPricingForKeyDate(keyDate : Date not null) as
    select
      key : keyDate                      as keyDate         : Date,
      key AgreementItemPricing.ID,
          AgreementItemPricing.item.ID   as Item,
          @title : '{i18n>validFromString}'
          AgreementItemPricing.validFrom as validFromString : String,
          @title : '{i18n>validToString}'
          AgreementItemPricing.validTo   as validToString   : String,
          @title : '{i18n>validFrom}'
          AgreementItemPricing.validFrom,
          @title : '{i18n>validTo}'
          AgreementItemPricing.validTo
    from agreement.AgreementItemPricing
    where
          AgreementItemPricing.validFrom <= : keyDate
      and AgreementItemPricing.validTo   >= : keyDate;
}

annotate ZAgreementService.Z_C_AItemPricingForKeyDate @(UI.SelectionVariant #params : {
  SelectOptions : [],
  Parameters    : [{
    $Type         : 'UI.Parameter',
    PropertyName  : keyDate,
    PropertyValue : 'TODAY'
  }]
});

annotate ZAgreementService.Z_C_AItemPricingForKeyDate with @(UI : {
  SelectionFields : [
    keyDate,
    ID,
  ],
  LineItem        : [
    {Value : ID, },
    {Value : Item, },
    {Value : validFromString, },
    {Value : validToString, },
    {Value : validFrom, },
    {Value : validTo, },
  ]
}) {};

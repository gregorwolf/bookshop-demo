using {agreement} from '../db/agreement';
using {AgreementService} from '../srv/agreement';

extend service AgreementService with {
  entity AgreementItemPricingForKeyDate(keyDate : Date not null) as
    select
      key AgreementItemPricing.ID,
          AgreementItemPricing.status.code,
          AgreementItemPricing.validFrom,
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

annotate AgreementService.AgreementItemPricingForKeyDate with @(UI : {
  SelectionFields : [
    ID,
    code,
  ],
  LineItem        : [
    {Value : ID, },
    {Value : code, },
    {Value : validFrom, },
    {Value : validTo, },
  ]
}) {};

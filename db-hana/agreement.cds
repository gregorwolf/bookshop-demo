using {agreement} from '../db/agreement';
using {AgreementService} from '../srv/agreement';

extend service AgreementService with {
  entity AgreementItemPricingForKeyDate(keyDate : Date) as
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

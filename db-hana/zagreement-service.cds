using {agreement} from '../db/agreement';

service ZAgreementService @(path : '/sap/Z_C_AITEMPRICINGFORKEYDATE_CDS') {
  entity Z_C_AItemPricingForKeyDate(keyDate : Date not null) as
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

using agreement from '../db/agreement';

service AgreementService {
  @odata.draft.enabled
  entity Agreement                  as projection on agreement.Agreement;

  @readonly
  @cds.redirection.target
  entity AgreementItemPricing       as projection on agreement.AgreementItemPricing;

  entity ChangeSetSearch            as projection on agreement.ChangeSetSearch;
  entity AgreementChangesAndStatus  as projection on agreement.AgreementChangesAndStatus;
  entity ChangeSetToAgreementSearch as projection on agreement.ChangeSetToAgreementSearch;
}

annotate AgreementService.AgreementItemPricing with @(UI: {
  SelectionFields: [
    ID,
    validFrom,
    validTo,
  ],
  LineItem       : [
    {Value: ID, },
    {Value: item.ID, },
    {Value: validFrom, },
    {Value: validTo, },
  ]
}) {};

using agreement from '../db/agreement';

service AgreementService {
  @odata.draft.enabled
  entity Agreement                  as projection on agreement.Agreement;

  entity ChangeSetSearch            as projection on agreement.ChangeSetSearch;
  entity AgreementChangesAndStatus  as projection on agreement.AgreementChangesAndStatus;
  entity ChangeSetToAgreementSearch as projection on agreement.ChangeSetToAgreementSearch;
}

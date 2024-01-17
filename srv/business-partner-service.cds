using {GWSAMPLE_BASIC as external} from './external/GWSAMPLE_BASIC';

service BusinessPartnerService @(path: '/GWSAMPLE_BASIC') {
    @cds.persistence.skip: false
    @cds.persistence.table
    entity BusinessPartnerSet : external.BusinessPartnerSet {}

    @cds.persistence.skip: false
    @cds.persistence.table
    entity ContactSet : external.ContactSet {}
};

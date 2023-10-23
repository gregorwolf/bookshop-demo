using {API_CV_ATTACHMENT_SRV as external} from './external/API_CV_ATTACHMENT_SRV.csn';

service AttachmentContentService @(path: 'API_CV_ATTACHMENT_SRV') {
    @cds.persistence.skip: false
    @cds.persistence.table
    entity AttachmentContentSet : external.AttachmentContentSet {}

    @cds.persistence.skip: false
    @cds.persistence.table
    entity A_DocumentInfoRecordAttch : external.A_DocumentInfoRecordAttch {
        DocumentInfoRecordToAttachmentNavigation : Association to many AttachmentContentSet
                                                       on  DocumentInfoRecordDocType    = DocumentInfoRecordToAttachmentNavigation.DocumentInfoRecordDocType
                                                       and DocumentInfoRecordDocNumber  = DocumentInfoRecordToAttachmentNavigation.DocumentInfoRecordDocNumber
                                                       and DocumentInfoRecordDocVersion = DocumentInfoRecordToAttachmentNavigation.DocumentInfoRecordDocVersion
                                                       and DocumentInfoRecordDocPart    = DocumentInfoRecordToAttachmentNavigation.DocumentInfoRecordDocPart;
    }

    function GetAttachmentCount(BusinessObjectTypeName : String, LinkedSAPObjectKey : String, SemanticObject : String) returns external.AttachmentsCount;
    function GetAllOriginals(BusinessObjectTypeName : String, LinkedSAPObjectKey : String, SemanticObject : String)    returns array of AttachmentContentSet;
};

using {API_CV_ATTACHMENT_SRV as external} from './external/API_CV_ATTACHMENT_SRV';

service AttachmentContentService @(path: 'API_CV_ATTACHMENT_SRV') {
    @cds.persistence.skip: false
    @cds.persistence.table
    entity AttachmentContentSet : external.AttachmentContentSet {} actions {
        // Without this definition the error:
        // “API_CV_ATTACHMENT_SRV.AttachmentContentSet” of kind ‘entity’ is defined outside a service and can't be used in “AttachmentContentService” (in entity:“AttachmentContentService.AttachmentContentSet”/action:“RenameAttachment”/returns)
        // occurs. According to the response in case 947262 / 2023 the redefinition of the action must be made explicitly.
        action RenameAttachment(SemanticObject : external.AttachmentContentSet:SemanticObject,
                                FileName : external.AttachmentContentSet:FileName,
                                SAPObjectType : external.AttachmentContentSet:SAPObjectType,
                                SAPObjectNodeType : external.AttachmentContentSet:SAPObjectNodeType) returns AttachmentContentSet;
    }

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


annotate AttachmentContentService.AttachmentContentSet with {
    @Core.MediaType  : MimeType
    Content;
    @Core.IsMediaType: true
    MimeType;
};

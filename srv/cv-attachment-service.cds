using {CV_ATTACHMENT_SRV as external} from './external/CV_ATTACHMENT_SRV';

service CvAttachmentService @(path: 'CV_ATTACHMENT_SRV') {
    @cds.persistence.skip: false
    @cds.persistence.table
    entity OriginalContentSet : external.OriginalContentSet {} actions {
        // Without this definition the errors:
        // “CV_ATTACHMENT_SRV.OriginalContentSet” of kind ‘entity’ is defined outside a service and can't be used in “CvAttachmentService” (in entity:“CvAttachmentService.OriginalContentSet”/action:“RenameAttachment”/returns)
        // “CV_ATTACHMENT_SRV.OriginalContentSet” of kind ‘entity’ is defined outside a service and can't be used in “CvAttachmentService” (in entity:“CvAttachmentService.OriginalContentSet”/action:“ResetCheckOut”/returns)
        // occur. According to the response in case 947262 / 2023 the redefinition of the action must be made explicitly.
        // Also parameters of actions can't be referenced from the external service definition.
        action RenameAttachment(ObjectKey : String(90),
                                ObjectType : String(40),
                                Filename : String(255),
                                SemanticObjectType : String(40),
                                IsDraft : Boolean) returns OriginalContentSet;
        action ResetCheckOut()                     returns OriginalContentSet;
    }


    function GetAttachmentCount(ObjectType : String, ObjectKey : String, SemanticObjectType : String) returns external.Attachments;
    function GetAllOriginals(ObjectType : String, ObjectKey : String, SemanticObjectType : String)    returns array of OriginalContentSet;
};


annotate CvAttachmentService.OriginalContentSet with {
    @Core.MediaType  : ContentType
    Content;
    @Core.IsMediaType: true
    ContentType;
};

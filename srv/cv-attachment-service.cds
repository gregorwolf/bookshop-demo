using {CV_ATTACHMENT_SRV as external} from './external/CV_ATTACHMENT_SRV';

service CvAttachmentService @(path: 'CV_ATTACHMENT_SRV') {
    @cds.persistence.skip: false
    @cds.persistence.table
    entity OriginalContentSet : external.OriginalContentSet {} actions {
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

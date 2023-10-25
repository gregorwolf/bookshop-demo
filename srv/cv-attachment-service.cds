using {CV_ATTACHMENT_SRV as external} from './external/CV_ATTACHMENT_SRV';

service CvAttachmentService @(path: 'CV_ATTACHMENT_SRV') {
    @cds.persistence.skip: false
    @cds.persistence.table
    entity OriginalContentSet : external.OriginalContentSet {}

    function GetAttachmentCount(ObjectType : String, ObjectKey : String, SemanticObjectType : String) returns external.Attachments;
    function GetAllOriginals(ObjectType : String, ObjectKey : String, SemanticObjectType : String)    returns array of OriginalContentSet;
};


annotate CvAttachmentService.OriginalContentSet with {
    @Core.MediaType  : ContentType
    Content;
    @Core.IsMediaType: true
    ContentType;
};

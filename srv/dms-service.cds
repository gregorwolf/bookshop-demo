service DocumentManagementService {
    function getRepositoryInfo()               returns String;
    function getFolderTree()                   returns String;
    function getChildren(folderName : String)  returns String;
    action   createFolder(folderName : String) returns String;
};

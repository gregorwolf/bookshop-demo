using my.bookshop as db from '../db/';

service DocumentManagementService {
    function getRepositoryInfo()               returns String;
    function getFolderTree()                   returns String;
    function getChildren(folderName : String)  returns String;
    action   createFolder(folderName : String) returns String;
    entity Documents as projection on db.Documents;
};

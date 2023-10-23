const cds = require("@sap/cds");
const LOG = cds.log("cv-attachment-service");
const { executeHttpRequest } = require("@sap-cloud-sdk/core");
const { getDestination } = require("./connection-helper");
const { Readable } = require("stream");

module.exports = async function (srv) {
  const external = await cds.connect.to("API_CV_ATTACHMENT_SRV");
  srv.on("GetAttachmentCount", async (req) => {
    LOG.info(req.data);
    const response = await external.send({
      method: "GET",
      path:
        `/GetAttachmentCount?` +
        `BusinessObjectTypeName='${req.data.BusinessObjectTypeName}'` +
        `&LinkedSAPObjectKey='${req.data.LinkedSAPObjectKey}'``&SemanticObject='${req.data.SemanticObject}'`,
    });
    return { AttachmentCount: response.GetAttachmentCount.AttachmentCount };
  });

  srv.on("GetAllOriginals", async (req) => {
    LOG.info(req.data);
    const response = await external.send({
      method: "GET",
      path:
        `/GetAllOriginals?` +
        `BusinessObjectTypeName='${req.data.BusinessObjectTypeName}'` +
        `&LinkedSAPObjectKey='${req.data.LinkedSAPObjectKey}'` +
        `&SemanticObject='${req.data.SemanticObject}'`,
    });
    return response;
  });

  srv.on("READ", "AttachmentContentSet", async (req) => {
    LOG.info(req.data);
    const url = req._.req.path;
    if (url.includes("/Content")) {
      const docInfoRecordDocType = req.data.DocumentInfoRecordDocType;
      const docInfoRecordDocNumber = req.data.DocumentInfoRecordDocNumber;
      const logicalDocument = req.data.LogicalDocument;
      const archiveDocumentID = req.data.ArchiveDocumentID;
      const linkedSAPObjectKey = req.data.LinkedSAPObjectKey;
      const businessObjectTypeName = req.data.BusinessObjectTypeName;

      const url =
        `/sap/opu/odata/sap/API_CV_ATTACHMENT_SRV/AttachmentContentSet(DocumentInfoRecordDocType='${docInfoRecordDocType}',` +
        `DocumentInfoRecordDocNumber='${docInfoRecordDocNumber}',DocumentInfoRecordDocVersion='',DocumentInfoRecordDocPart='',` +
        `LogicalDocument='${logicalDocument}',ArchiveDocumentID='${archiveDocumentID}',LinkedSAPObjectKey='${linkedSAPObjectKey}',` +
        `BusinessObjectTypeName='${businessObjectTypeName}')/$value`;
      LOG.debug("URL:", url);
      const getResponse = await executeHttpRequest(getDestination(req), {
        url,
        method: "GET",
        responseType: "arraybuffer",
      });
      return { value: Readable.from(getResponse.data) };
    } else {
      return [
        {
          DocumentInfoRecordDocType: "GOS",
          DocumentInfoRecordDocNumber: "EXT48000000001060",
          DocumentInfoRecordDocVersion: "",
          DocumentInfoRecordDocPart: "",
          LogicalDocument: "6BBB5A9E38041EEE9CBAC9EF2DF6A19B",
          ArchiveDocumentID: "6BBB5A9E38041EEE9CBAC9EF2DF6C19B",
          LinkedSAPObjectKey: "4711",
          BusinessObjectTypeName: "BUS1001006",
          SemanticObject: "",
          WorkstationApplication: "",
          FileSize: "3119",
          FileName: "Test.png",
          DocumentURL: "",
          MimeType: "image/png",
          CreationDateTime: "/Date(1698087576000)/",
          BusinessObjectType: "BUS1001006",
          LastChangedByUser: "",
          LastChangedByUserFullName: "",
          ChangedDateTime: null,
          StorageCategory: "",
          ArchiveLinkRepository: "",
          SAPObjectType: "",
          SAPObjectNodeType: "",
          HarmonizedDocumentType: "GOS",
          AttachmentDeletionIsAllowed: true,
          AttachmentRenameIsAllowed: false,
          Source: "GOS",
        },
      ];
    }
  });
};

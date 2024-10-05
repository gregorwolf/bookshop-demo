const cds = require("@sap/cds");
const LOG = cds.log("cv-attachment-service");
const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");
const { getDestination } = require("./connection-helper");
const { Readable } = require("stream");

module.exports = async function (srv) {
  // Connect to the external service
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
    return getAllOriginals(req.data);
  });

  async function getAllOriginals(data) {
    let path =
      `/GetAllOriginals?` +
      `BusinessObjectTypeName='${data.BusinessObjectTypeName}'` +
      `&LinkedSAPObjectKey='${data.LinkedSAPObjectKey}'` +
      `&SemanticObject='${data.SemanticObject}'`;
    if (data.DocumentInfoRecordDocType) {
      path += `&DocumentInfoRecordDocType='${data.DocumentInfoRecordDocType}'`;
    }
    if (data.DocumentInfoRecordDocNumber) {
      path += `&DocumentInfoRecordDocNumber='${data.DocumentInfoRecordDocNumber}'`;
    }
    if (data.LogicalDocument) {
      path += `&LogicalDocument='${data.LogicalDocument}'`;
    }
    if (data.ArchiveDocumentID) {
      path += `&ArchiveDocumentID='${data.ArchiveDocumentID}'`;
    }
    const response = await external.send({
      method: "GET",
      path,
    });
    return response;
  }

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
      // Only SAP Cloud SDK supports setting the responseType to arraybuffer
      const getResponse = await executeHttpRequest(getDestination(req), {
        url,
        method: "GET",
        responseType: "arraybuffer",
      });
      const metadata = await getAllOriginals(req.data);
      return {
        value: Readable.from(getResponse.data),
        $mediaContentType: metadata[0].MimeType,
        $mediaContentDispositionFilename: metadata[0].FileName,
      };
    }
  });
};

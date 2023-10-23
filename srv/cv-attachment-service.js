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
    if (url.includes("Content")) {
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
      return { value: Readable.from(getResponse.data), MimeType: "image/png" };
    }
  });
};

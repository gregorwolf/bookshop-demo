const cds = require("@sap/cds");
const LOG = cds.log("cv-attachment-service");

module.exports = async function (srv) {
  const external = await cds.connect.to("API_CV_ATTACHMENT_SRV");
  srv.on("GetAttachmentCount", async (req) => {
    console.log(req.data);
    const response = await external.send({
      method: "GET",
      path:
        `/GetAttachmentCount?` +
        `BusinessObjectTypeName='${req.data.BusinessObjectTypeName}'` +
        `&LinkedSAPObjectKey='${req.data.LinkedSAPObjectKey}'` +
        `&SemanticObject='${req.data.SemanticObject}'`,
    });
    return { AttachmentCount: response.GetAttachmentCount.AttachmentCount };
  });

  srv.on("GetAllOriginals", async (req) => {
    console.log(req.data);
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
};

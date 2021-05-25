const cds = require("@sap/cds");

module.exports = cds.service.impl((srv) => {
  srv.on("GetAttachmentCount", async (req) => {
    console.log(req.data);
    return { AttachmentCount: 2 };
  });
});

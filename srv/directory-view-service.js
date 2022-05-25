const cds = require("@sap/cds");
module.exports = function () {
  this.before("*", `*`, async (req) => {
    if (req.target.name === "DirectoryViewService.Session") {
      return;
    }
    const query = SELECT.one("directory.Session").where({
      user: req.user.id,
    });
    const session = await cds.tx(req).run(query);
    if (session === null || !session.directory || !session.version) {
      return req.error("mandatory session variable not set");
    }
    /*
    // Only possible with HANA DB
    await cds.tx(req).run(`SET 'DIRECTORY' = '${session.directory}'`);
    await cds.tx(req).run(`SET 'VERSION' = '${session.version}'`);
    */
  });
};

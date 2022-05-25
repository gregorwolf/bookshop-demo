const cds = require("@sap/cds");
module.exports = function () {
  this.before("*", `*`, async (req) => {
    req.user.attr.version = 1;
    console.log(req.user);
    if (cds.env.requires.db.kind === "hana") {
      await cds.tx(req).run("SET 'VERSION' = '1'");
    }
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
  });
  this.on("READ", `Version`, async (req) => {
    if (cds.env.requires.db.kind === "hana") {
      const result = await cds
        .tx(req)
        .run(`SELECT SESSION_CONTEXT('VERSION') AS "version" FROM DUMMY`);
      return result;
    } else {
      return req.error("Only supported for HANA DB");
    }
  });
};

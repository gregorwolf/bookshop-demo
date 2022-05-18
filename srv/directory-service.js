const cds = require("@sap/cds");
module.exports = function () {
  this.before("*", `*`, async (req) => {
    req.user.attr.version = 1;
    console.log(req.user);
    await cds.tx(req).run("SET 'VERSION' = '1'");
  });
  this.on("READ", `Version`, async (req) => {
    const result = await cds
      .tx(req)
      .run(`SELECT SESSION_CONTEXT('VERSION') AS "version" FROM DUMMY`);
    return result;
  });
};

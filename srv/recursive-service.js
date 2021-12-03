const cds = require("@sap/cds");

class RecursiveService extends cds.ApplicationService {
  async init() {
    this.on("getItemGrouping", async (req) => {
      const itemGrouping = { ID: "1" };
      if (req.data.includeLeaves) {
        itemGrouping.children = [{ ID: "2" }, { ID: "3" }];
      }
      return itemGrouping;
    });
  }
}

module.exports = { RecursiveService };

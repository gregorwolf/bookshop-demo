const cds = require("@sap/cds");

module.exports = async function (srv) {
  const destinations = ["ES5", "ERP"];

  srv.on("READ", "BusinessPartnerSet", async (req) => {
    try {
      const result = [];
      for (let i = 0; i < destinations.length; i++) {
        const destination = destinations[i];
        // cds.env.requires.GWSAMPLE_BASIC.credentials.destination = destination;
        const external = await cds.connect.to("GWSAMPLE_BASIC", {
          credentials: {
            destination,
            path: "/sap/opu/odata/iwbep/GWSAMPLE_BASIC",
          },
        });
        let subresult = await external.run(req.query);
        subresult.forEach((element) => {
          result.push(element);
        });
        console.log(
          `Query to ${destination} returned ${subresult.length} items`
        );
      }
      return result;
    } catch (error) {
      console.error("Error Message: " + error.message);
      if (error.request && error.request.path) {
        console.error("Request path: " + error.request.path);
      }
    }
  });
  srv.on("READ", "ContactSet", async (req) => {
    const external = await cds.connect.to("GWSAMPLE_BASIC");
    return await external.run(req.query);
  });
};

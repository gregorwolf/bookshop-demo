const cds = require("@sap/cds");
const LOG = cds.log("business-partner");
const retry = require("async-retry");

module.exports = async function (srv) {
  const destinations = [
    "ES5",
    //, "ERP"
  ];

  srv.on("getBusinessPartnerDetails", async (req) => {
    const external = await cds.connect.to("GWSAMPLE_BASIC");
    const result = await external.run(req.query);
    return result;
  });
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
        LOG.info(`Query to ${destination} returned ${subresult.length} items`);
      }
      return result;
    } catch (error) {
      LOG.error("Error Message: " + error.message);
      if (error.request && error.request.path) {
        LOG.error("Request path: " + error.request.path);
      }
    }
  });

  srv.on("READ", "ContactSet", async (req) => {
    const external = await cds.connect.to("GWSAMPLE_BASIC");
    // return await external.run(req.query);
    return await runWithRetry(external, req.query);
  });
};

const options = {
  retries: 3,
  minTimeout: 1000,
};

// Create a wrapper passing arguments
async function runWithRetry(external, query) {
  // Wrap the retry block around the async function.
  return retry(async (bail) => {
    try {
      const result = await external.run(query);
      return result;
    } catch (error) {
      // Use the bail() method to stop the retries for some cases
      if (error.statusCode === 401) {
        logger.warn("Request failed with status 401 - no retry necessary.");
        bail(error);
      }
      throw error;
    }
  }, options);
}

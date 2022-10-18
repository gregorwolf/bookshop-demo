const cds = require("@sap/cds");

/**
 * Implementation of the Connection Pool monitoring handler
 *
 * By Martin Stenzig
 * https://answers.sap.com/questions/13738468/monitoring-db-pool-usage.html?childToView=13738470
 * and
 * https://github.com/RizInno/cds-load-refsrv/blob/main/srv/handlers/pool.js
 */
class PoolService extends cds.ApplicationService {
  async init() {
    // Connect to database
    const db = await cds.connect.to("db");

    /**
     * Event handler for 'getInfo' pool information function
     */
    this.on("getInfo", async (req) => {
      // Only execute if database is HANA
      if (cds.env.requires.db.kind == "hana") {
        // Create a transaction bracket
        let tx = db.tx();

        // Execute a dummy query - you must run a query to get the connection pool info!
        await tx.run("SELECT * FROM DUMMY");

        // Get reference to connection pool
        const pool = tx.dbc._pool;

        //
        const allocatedResources = [];

        pool._allObjects instanceof Set &&
          pool._allObjects.forEach((resource) => {
            resource.state === "ALLOCATED" && allocatedResources.push(resource);
          });

        const { available, borrowed, size, pending, min, max } = pool;

        const poolStats = {
          level: "info",
          message: "generic pool statistics",
          technicalInformation: {
            available,
            borrowed,
            size,
            pending,
            min,
            max,
            allocatedResources: allocatedResources.map((resource) => {
              let connectionId = null;
              if (
                resource.obj &&
                resource.obj._connection &&
                resource.obj._connection.connectOptions
              ) {
                connectionId =
                  resource.obj._connection.connectOptions.connectionId;
              }
              return {
                connectionId,
                creationTime: new Date(resource.creationTime).toISOString(),
                lastBorrowTime: new Date(resource.lastBorrowTime).toISOString(),
                lastIdleTime: new Date(resource.lastIdleTime).toISOString(),
                lastReturnTime: new Date(resource.lastReturnTime).toISOString(),
              };
            }),
          },
          fieldValues: { quantity: borrowed },
        };

        return poolStats;
      } else {
        return (
          "Connection pool info not supported for db type " +
          cds.env.requires.db.kind
        );
      }
    });

    // ensure to call super.init()
    await super.init();
  }
}
module.exports = PoolService;

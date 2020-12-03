const express = require("express");
const cds = require("@sap/cds");
const proxy = require("@sap/cds-odata-v2-adapter-proxy");

const host = "0.0.0.0";
const port = process.env.PORT || 4004;

(async () => {
  const app = express();

  await cds.connect.to("db", {
    kind: "sqlite",
    credentials: {
      database: ":memory:",
    },
  });

  const srv = await cds.load("./srv/");
  await cds.deploy(srv);

  // OData V2
  app.use(proxy());

  // OData V4
  await cds.serve("CatalogService").from("./srv/").at("/").in(app);

  const server = app.listen(port, host, () => console.info(`app is listing at ${host}:${port}`));
  server.on("error", error => console.error(error.stack));
})();
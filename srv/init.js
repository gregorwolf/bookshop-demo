const cds = require("@sap/cds");
const LOG = cds.log("init");

module.exports = async (db) => {
  const { ServiceDefinition } = db.entities("dynamic");

  let csnHelloWorldService = await cds.compile(
    "file:./dynamic/hello-world-service.cds"
  );
  let csnMinimalService = await cds.compile("file:./srv/minimal-service.cds");
  const ServiceDefinitionData = [
    {
      ID: "6a038142-7284-4da0-9046-6bea467b76ef",
      ServiceName: "HelloWorldService",
      CSN: csnHelloWorldService,
      ServicePath: "hello-world",
      Implementation:
        // "module.exports = class HelloWorldService { hello(req) { return `Hello ${req.data.to}!`; } };",
        "module.exports = (srv)=>{ srv.on ('hello', req => `Hello ${req.data.to}!`)}",
    },
    {
      ID: "7a038142-7284-4da0-9046-6bea467b76ef",
      ServiceName: "minimal.MinimalService",
      CSN: csnMinimalService,
      ServicePath: "minimal",
      Implementation:
        //  "module.exports = class MinimalService { hello(req) { return `Hello ${req.data.to}!`; } };",
        "module.exports = (srv)=>{ srv.on ('hello', req => `Hello ${req.data.to}!`)}",
    },
  ];
  const entityToData = new Map([[ServiceDefinition, ServiceDefinitionData]]);

  for (const [key, value] of entityToData.entries()) {
    // write data to db
    LOG.info(`Write ${value} entries into ${key.name}`);
    await cds.run([INSERT(value).into(key)]);
  }
};

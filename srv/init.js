const cds = require("@sap/cds");
const LOG = cds.log("init");

module.exports = async (db) => {
  const { ServiceDefinition } = db.entities("dynamic");

  let csn = await cds.compile("file:./dynamic/hello-world-service.cds");
  const ServiceDefinitioData = [
    {
      ID: "6a038142-7284-4da0-9046-6bea467b76ef",
      ServiceName: "HelloWorldService",
      CSN: csn,
      ServicePath: "hello-world",
      Implementation:
        "module.exports = class HelloWorldService { hello(req) { return `Hello ${req.data.to}!`; } };",
    },
  ];
  const entityToData = new Map([[ServiceDefinition, ServiceDefinitioData]]);

  for (const [key, value] of entityToData.entries()) {
    // write data to db
    LOG.info(`Write ${value} entries into ${key.name}`);
    await cds.run([INSERT(value).into(key)]);
  }
};

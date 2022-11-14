var onHeaders = require("on-headers");

module.exports = expressLogMemory;

const formatMemoryUsage = (data) =>
  `${Math.round((data / 1024 / 1024) * 100) / 100} MB`;

function expressLogMemory() {
  return function expressLogMemory(req, res, next) {
    onHeaders(res, function onHeaders() {
      var memoryData = process.memoryUsage();
      const memoryUsage = {
        rss: `${formatMemoryUsage(
          memoryData.rss
        )} -> Resident Set Size - total memory allocated for the process execution`,
        heapTotal: `${formatMemoryUsage(
          memoryData.heapTotal
        )} -> total size of the allocated heap`,
        heapUsed: `${formatMemoryUsage(
          memoryData.heapUsed
        )} -> actual memory used during the execution`,
        external: `${formatMemoryUsage(
          memoryData.external
        )} -> V8 external memory`,
      };

      console.info("Memory Usage:");
      console.info(memoryUsage);
    });

    next();
  };
}

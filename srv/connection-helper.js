const { retrieveJwt } = require("@sap-cloud-sdk/core");

function getDestination(req, destinationName = "S4H") {
  const destination = {
    destinationName: destinationName,
  };
  const jwt = retrieveJwt(req);
  if (jwt && jwt !== "") {
    destination.jwt = jwt;
  }
  return destination;
}

module.exports = { getDestination };

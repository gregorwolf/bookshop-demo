const cmis = require("cmis");
const xsenv = require("@sap/xsenv");
xsenv.loadEnv();

const services = xsenv.getServices({
  sdm: { tag: "sdm" },
});

const destination = {
  name: "sdm",
  type: "HTTP",
  url: services.sdm.credentials.endpoints.ecmservice.url,
  authentication: "OAuth2ClientCredentials",
  clientId: services.sdm.credentials.uaa.clientid,
  clientSecret: services.sdm.credentials.uaa.clientsecret,
  tokenServiceUrl: services.sdm.credentials.uaa.url + "/oauth/token",
};

// how to use SAP Cloud SDK to provide just the token?
const token = "";

// Example with plain axios calls:
// Integrating SAP Document Management in CAP Application
// https://blogs.sap.com/2020/10/23/integrating-sap-document-management-in-cap-application/

// Alternative:
// Configure OAuth2UserTokenExchange Destination as described in:
//
// Configure Document Management for Workflow Capability Attachments
// https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/d99fd6a4d13e43bfbfc936a03ff65b32.html
const session = new cmis.CmisSession(
  services.sdm.credentials.endpoints.ecmservice.url + "/browser"
);
session.setToken(token);

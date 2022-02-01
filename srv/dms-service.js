const cds = require("@sap/cds");
const axios = require("axios");
const cmis = require("cmis");
const xsenv = require("@sap/xsenv");
xsenv.loadEnv();

const services = xsenv.getServices({
  sdm: { tag: "sdm" },
});

const destination = {
  name: "sdm",
  type: "HTTP",
  url: services.sdm.endpoints.ecmservice.url,
  authentication: "OAuth2ClientCredentials",
  clientId: services.sdm.uaa.clientid,
  clientSecret: services.sdm.uaa.clientsecret,
  tokenServiceUrl: services.sdm.uaa.url + "/oauth/token",
};

// how to use SAP Cloud SDK to provide just the token?

// Example with plain axios calls:
// Integrating SAP Document Management in CAP Application
// https://blogs.sap.com/2020/10/23/integrating-sap-document-management-in-cap-application/

const _fetchJwtToken = async function (oauthUrl, oauthClient, oauthSecret) {
  // This is to get the oauth token , which is used to create the folder ID
  return new Promise((resolve, reject) => {
    const tokenUrl =
      oauthUrl +
      "/oauth/token?grant_type=client_credentials&response_type=token";
    const config = {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(oauthClient + ":" + oauthSecret).toString("base64"),
      },
    };
    axios
      .get(tokenUrl, config)
      .then((response) => {
        resolve(response.data.access_token);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getToken = async function () {
  return _fetchJwtToken(
    services.sdm.uaa.url,
    destination.clientId,
    destination.clientSecret
  );
};

// Alternative:
// Configure OAuth2UserTokenExchange Destination as described in:
//
// Configure Document Management for Workflow Capability Attachments
// https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/d99fd6a4d13e43bfbfc936a03ff65b32.html
const session = new cmis.CmisSession(
  services.sdm.endpoints.ecmservice.url + "browser"
);

module.exports = cds.service.impl((srv) => {
  srv.on("getRepositoryInfo", async (req) => {
    const repositories = await session
      .setToken(await getToken())
      .loadRepositories();
    const repositoryInfo = await session.getRepositoryInfo();
    return repositoryInfo;
  });
  srv.on("getFolderTree", async (req) => {
    const repositories = await session
      .setToken(await getToken())
      .loadRepositories();
    try {
      const folderTree = await session.getFolderTree("");
      return folderTree;
    } catch (error) {
      console.log(error.message);
    }
  });
  srv.on("getChildren", async (req) => {
    const repositories = await session
      .setToken(await getToken())
      .loadRepositories();
    try {
      const children = await session.getChildren("root");
      return children;
    } catch (error) {
      console.log(error.message);
    }
  });
});

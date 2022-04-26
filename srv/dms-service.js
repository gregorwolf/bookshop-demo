const { PassThrough } = require("stream");
var FormData = require("form-data");
const cds = require("@sap/cds");
const axios = require("axios");
const cmis = require("cmis");
const xsenv = require("@sap/xsenv");
xsenv.loadEnv();
let services = {};
try {
  services = xsenv.getServices({
    sdm: { tag: "sdm" },
  });
} catch (error) {
  console.error(
    "[dms-service] - Please maintain the sdm service in the VCAP_SERVICES"
  );
}
if (services.sdm) {
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
      // Implementation using CmisJS
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
} else {
  module.exports = cds.service.impl((srv) => {
    srv.on("getChildren", async (req) => {
      console.log(req.data.folderName);
      if (!req.data.folderName) {
        return req.error("No folderName provided");
      }
      const cmisService = await cds.connect.to("CMISdocumentRepository");
      return cmisService.get("/" + req.data.folderName);
    });
    srv.on("createFolder", async (req) => {
      console.log(req.data.folderName);
      if (!req.data.folderName) {
        return req.error("No folderName provided");
      }
      const cmisService = await cds.connect.to("CMISdocumentRepository");
      const data =
        `cmisAction=createFolder` +
        `&propertyId[0]=cmis:objectTypeId` +
        `&propertyValue[0]=cmis:folder` +
        `&propertyId[1]=cmis:name` +
        `&propertyValue[1]=${req.data.folderName}`;
      const headers = { "Content-Type": "application/x-www-form-urlencoded" };
      return cmisService.send({ method: "POST", path: "/", data, headers });
    });
    srv.on("UPDATE", "Documents", async (req, next) => {
      if (req.data.content) {
        const db = await cds.connect.to("db");
        const cmisService = await cds.connect.to("CMISdocumentRepository");
        const documentId = req.data.ID;
        const document = await db.run(
          SELECT.one.from("Documents").where({
            ID: documentId,
          })
        );

        const stream = new PassThrough();
        const chunks = [];
        stream.on("data", (chunk) => {
          chunks.push(chunk);
        });
        stream.on("end", () => {
          document.content = Buffer.concat(chunks);
          /*
          var form = new FormData();
          form.append("cmisaction", "createDocument");
          form.append("propertyId[0]", "cmis:objectTypeId");
          form.append("propertyValue[0]", "cmis:document");
          form.append("propertyId[1]", "cmis:name");
          form.append("propertyValue[1]", document.filename);
          form.append("file", document.content);
          const data
          const data = form.getBuffer();
          const headers = form.getHeaders();
          */
          const headers = {
            "Content-Type": `multipart/form-data;boundary="WebKitFormBoundary7MA4YWxkTrZu0gW"`,
          };
          headers.Accept = `*/*`;
          const data = `--WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="cmisaction"

createDocument
--WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="propertyId[0]"

cmis:objectTypeId
--WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="propertyValue[0]"

cmis:document
--WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="propertyId[1]"

cmis:name
--WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="propertyValue[1]"

${document.filename}
--WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="${document.filename}"
Content-Type: image/png

${document.content}
--WebKitFormBoundary7MA4YWxkTrZu0gW--`;

          return cmisService.send({
            method: "POST",
            path: "/folder01",
            data,
            headers,
          });
        });
        req.data.content.pipe(stream);
      }
    });
  });
}

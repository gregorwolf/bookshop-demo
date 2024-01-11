const cds = require("@sap/cds");
const LOG = cds.log("server");
const cov2ap = require("@cap-js-community/odata-v2-adapter");
const helmet = require("helmet");
const passport = require("passport");
const xsenv = require("@sap/xsenv");
const express = require("express");
const SDKUtil = require("@sap-cloud-sdk/util");
// const mqtt = require("./mqtt");

var xsuaaCredentials = false;
if (process.env.NODE_ENV === "production") {
  try {
    xsenv.loadEnv();
    const JWTStrategy = require("@sap/xssec").JWTStrategy;
    const services = xsenv.getServices({ xsuaa: { tags: "xsuaa" } });
    xsuaaCredentials = services.xsuaa;
    const jwtStrategy = new JWTStrategy(xsuaaCredentials);
    passport.use(jwtStrategy);
  } catch (error) {
    LOG.warn(error.message);
  }
}

// Middleware to read SAP Job Headers sent by client
function sapJobLogger(req, res, next) {
  if (req.headers["x-sap-job-id"]) {
    LOG.info("===> SAP Job Headers");
    LOG.info(
      "===> SAP Job Headers - x-sap-job-id:         " +
        req.headers["x-sap-job-id"]
    );
    LOG.info(
      "===> SAP Job Headers - x-sap-jobschedule-id: " +
        req.headers["x-sap-jobschedule-id"]
    );
    LOG.info(
      "===> SAP Job Headers - x-sap-job-run-id:     " +
        req.headers["x-sap-job-run-id"]
    );
    LOG.info(
      "===> SAP Job Headers - x-sap-scheduler-host: " +
        req.headers["x-sap-scheduler-host"]
    );
  }

  next();
}

// Middleware to read JWT sent by client
function jwtLogger(req, res, next) {
  LOG.info("===> Decoding auth header");
  const jwtToken = readJwt(req);
  if (jwtToken) {
    LOG.info("===> JWT: scopes: " + jwtToken.scope);
    LOG.info("===> JWT: client_id: " + jwtToken.client_id);
    LOG.info("===> JWT: user: " + jwtToken.user_name);
  }

  next();
}

// Middleware to replace Accept: application/atomsvc+xml,application/atom+xml with Accept: application/json
function replaceExcelAcceptHeader(req, res, next) {
  LOG.info("===> replaceExcelAcceptHeader");
  LOG.info(req.headers.accept);
  if (req.headers.accept === "application/atomsvc+xml,application/atom+xml") {
    req.headers.accept = "application/json";
  }
  /*
   */
  next();
}

const readJwt = function (req) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const theJwtToken = authHeader.substring(7);
    if (theJwtToken) {
      LOG.info("===> JWT Token: " + theJwtToken);
      const jwtBase64Encoded = theJwtToken.split(".")[1];
      if (jwtBase64Encoded) {
        const jwtDecoded = Buffer.from(jwtBase64Encoded, "base64").toString(
          "ascii"
        );
        return JSON.parse(jwtDecoded);
      }
    }
  }
};

cds.on("bootstrap", async (app) => {
  // SDKUtil.setGlobalLogLevel("info");
  const cdsenv = cds.env;
  app.use("/appconfig", express.static("./app/webapp/appconfig/"));
  /*
  // TODO: Implement helmet following the best practice
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          // custom settings
        },
      },
    })
  );
  */

  // app.use(replaceExcelAcceptHeader)
  app.use(sapJobLogger);

  // Authentication using JWT
  if (process.env.NODE_ENV === "production") {
    app.use(jwtLogger);
    await app.use(passport.initialize());
    await app.use(passport.authenticate("JWT", { session: false }));
  }
  await app.get("/api/userInfo", function (req, res) {
    if (req.user) {
      res.json(req.user);
    } else {
      res.status(500).json("No user information available");
    }
  });

  // app endpoint with authorization check does ony work with @sap/xssec > 3.0.0
  await app.get("/api/getData", function (req, res) {
    LOG.info("===> Endpoint has been reached. Now checking authorization");
    const MY_SCOPE = xsuaaCredentials.xsappname + ".admin"; // scope name copied from xs-security.json
    LOG.info("===> MY_SCOPE: " + MY_SCOPE);
    if (req.authInfo?.checkScope(MY_SCOPE)) {
      res.send(
        "The endpoint was properly called, role available, delivering data"
      );
    } else {
      const jwtToken = readJwt(req);
      const availableScopes = jwtToken ? jwtToken.scope : {};

      return res.status(403).json({
        error: "Unauthorized",
        message: `Missing required role: <admin>. Available scopes: ${availableScopes}`,
      });
    }
  });
});
// Swagger / OpenAPI
if (process.env.NODE_ENV !== "production") {
  const cds_swagger = require("cds-swagger-ui-express");
  const responseTime = require("response-time");
  const statusMonitor = require("express-status-monitor");
  // const expressLogMemory = require("./express-log-memory");
  cds.on("bootstrap", (app) => {
    app.use(cds_swagger());
    app.use(responseTime());
    app.use(statusMonitor());
    app.use(cov2ap());
    // app.use(expressLogMemory());
  });
}

cds.on("served", async (services) => {
  const db = await cds.connect.to("db");
  const { ServiceDefinition } = db.entities("dynamic");
  const serviceDefinitions = await SELECT.from(ServiceDefinition);
  LOG.debug("serviceDefinitions: ", serviceDefinitions);
  for (const serviceDefinition of serviceDefinitions) {
    const csn = JSON.parse(serviceDefinition.CSN);
    cds
      .serve(serviceDefinition.ServiceName)
      .from(csn)
      .to("odata")
      .at(serviceDefinition.ServicePath)
      .with(eval(serviceDefinition.Implementation))
      .in(cds.app);
  }
});

module.exports = cds.server; // > delegate to default server.js

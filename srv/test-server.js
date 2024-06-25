// Sample Code from
// https://blogs.sap.com/2020/06/02/how-to-call-protected-app-from-external-app-as-external-user-with-scope/
const express = require("express");
const passport = require("passport");
const xsenv = require("@sap/xsenv");
xsenv.loadEnv();
const JWTStrategy = require("@sap/xssec").v3.JWTStrategy;

//configure passport
const services = xsenv.getServices({ xsuaa: { tags: "xsuaa" } });
const xsuaaCredentials = services.xsuaa;
const jwtStrategy = new JWTStrategy(xsuaaCredentials);

// configure express server with authentication middleware
passport.use(jwtStrategy);
const app = express();

// Middleware to read JWT sent by client
function jwtLogger(req, res, next) {
  console.log("===> Decoding auth header");
  const jwtToken = readJwt(req);
  if (jwtToken) {
    console.log("===> JWT: scopes: " + jwtToken.scope);
    console.log("===> JWT: client_id: " + jwtToken.client_id);
    console.log("===> JWT: user: " + jwtToken.user_name);
  }

  next();
}

app.use(jwtLogger);
app.use(passport.initialize());
app.use(passport.authenticate("JWT", { session: false }));

// app endpoint with authorization check
app.get("/api/getData", function (req, res) {
  console.log("===> Endpoint has been reached. Now checking authorization");
  const MY_SCOPE = xsuaaCredentials.xsappname + ".admin"; // scope name copied from xs-security.json
  if (req.authInfo.checkScope(MY_SCOPE)) {
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

const readJwt = function (req) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const theJwtToken = authHeader.substring(7);
    if (theJwtToken) {
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

// start server
app.listen(process.env.PORT || 4004, () => {
  console.log("Server running...");
});

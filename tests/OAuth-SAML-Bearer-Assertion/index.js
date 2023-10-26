//
// Create SAML assertions. Supports SAML 1.1 and SAML 2.0 tokens.
//
var saml = require("saml").Saml20; // https://www.npmjs.com/package/saml
var fs = require("fs");
require("dotenv").config();

function generateSAMLBearerAssertion() {
  var options = {
    cert: fs.readFileSync(__dirname + "/saml-idp.pem"),
    key: fs.readFileSync(__dirname + "/saml-idp-key.pem"),

    issuer: process.env.issuer, // CN of the public certificate key which is the Provider Name in a Trusted SAML Provider in SAC/System/Administration/App Integration
    lifetimeInSeconds: 3600,
    attributes: {
      client_id: process.env.client_id,
    },
    includeAttributeNameFormat: true, //false,
    sessionIndex: "_faed468a-15a0-4668-aed6-3d9c478cc8fa",
    authnContextClassRef:
      "urn:oasis:names:tc:SAML:2.0:ac:classes:PreviousSession",
    nameIdentifierFormat: "urn:oasis:names:tc:SAML:2.0:attrname-format:email", // urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified
    nameIdentifier: process.env.nameIdentifier, // user email address
    recipient: process.env.recipient,
    audiences: process.env.audiences,
    // signatureAlgorithm: rsa-sha256',
    // digestAlgorithm: 'sha256',
    signatureNamespacePrefix: "ds",
  };

  var unsignedAssertion = saml.createUnsignedAssertion(options);

  var signedAssertion = saml.create(options);
  signedAssertion = btoa(signedAssertion);
  // console.log("btoa-ed signedAssertion: ", signedAssertion);
  signedAssertion = encodeURIComponent(signedAssertion);

  console.log("unsignedAssertion: ", unsignedAssertion);
  // console.log("signedAssertion: ", signedAssertion);
  return signedAssertion; // unsignedAssertion;
}

var samlassertion = generateSAMLBearerAssertion();
// console.log("samlassertion: ", samlassertion);

var samlassertionDecoded = Buffer.from(samlassertion, "base64").toString(
  "utf-8"
);
// console.log("samlassertion: ", samlassertionDecoded);

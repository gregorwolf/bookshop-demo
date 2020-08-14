// load modules
const express = require('express')
const cds = require('@sap/cds')
const helmet = require("helmet")
const proxy = require('@sap/cds-odata-v2-adapter-proxy')
// For authentication test
const passport = require("passport")
const xsenv = require("@sap/xsenv")
xsenv.loadEnv();
const JWTStrategy = require("@sap/xssec").JWTStrategy
const services = xsenv.getServices({ xsuaa: { tags: "xsuaa" }})
const xsuaaCredentials = services.xsuaa
const jwtStrategy = new JWTStrategy(xsuaaCredentials)
passport.use(jwtStrategy)

// config
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4004
const csn = 'gen/csn.json'

// Middleware to read JWT sent by client
function jwtLogger(req, res, next) {
  console.log('===> Decoding auth header' )
  const jwtToken = readJwt(req)
  if(jwtToken){
     console.log('===> JWT: scopes: ' + jwtToken.scope)
     console.log('===> JWT: client_id: ' + jwtToken.client_id)
     console.log('===> JWT: user: ' + jwtToken.user_name)
  }

  next()
}

const readJwt = function(req){
  const authHeader = req.headers.authorization;
  if (authHeader){
     const theJwtToken = authHeader.substring(7);
     if(theJwtToken){
        const jwtBase64Encoded = theJwtToken.split('.')[1];
        if(jwtBase64Encoded){
           const jwtDecoded = Buffer.from(jwtBase64Encoded, 'base64').toString('ascii');
           return JSON.parse(jwtDecoded);           
        }
     }
  }
}

;(async () => {
  // create new app
  const app = express()
  app.use(helmet())
  app.use(jwtLogger)
  // Authentication using JWT
  await app.use(passport.initialize())
  await app.use(
    passport.authenticate("JWT", { session: false })
  )

  await app.get("/api/userInfo", function (req, res) {
    if(req.user) {
      res.json(req.user)
    } else {
      res.status(500).json('No user information available')
    }
  })

  // app endpoint with authorization check does ony work with @sap/xssec > 3.0.0
  await app.get('/api/getData', function(req, res){
    console.log('===> Endpoint has been reached. Now checking authorization')
    const MY_SCOPE = xsuaaCredentials.xsappname + '.admin'// scope name copied from xs-security.json
    if(req.authInfo.checkScope(MY_SCOPE)){
      res.send('The endpoint was properly called, role available, delivering data');
    }else{
      const jwtToken = readJwt(req)
      const availableScopes = jwtToken ? jwtToken.scope : {}
    
      return res.status(403).json({
          error: 'Unauthorized',
          message: `Missing required role: <admin>. Available scopes: ${availableScopes}`
      });
    }
  });

  //  does ony work with @sap/xssec ^2.2.5
  await cds.connect('db') // ensure database is connected!
  // serve odata v4
  await cds
    .serve('AdminService')
    .from(csn)
    .with('admin-service.js')
    .in(app)

  await cds
    .serve('CatalogService')
    .from(csn)
    .with('cat-service.js')
    .in(app)

  // serve odata v2
  // process.env.XS_APP_LOG_LEVEL = 'error'; // suppress debug logs
  app.use(
    proxy({
      // app
      path: 'v2',
      model: csn,
      // target
      port: port
    })
  )

  // start server
  const server = app.listen(port, host, () =>
    console.info(`app is listing at ${host}:${port}`)
  )
  server.on('error', error => console.error(error.stack))
})()

const cds = require('@sap/cds')
const proxy = require('@sap/cds-odata-v2-adapter-proxy')
const helmet = require('helmet')
const passport = require("passport")
const xsenv = require("@sap/xsenv")
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./gen/swagger.json')
const express = require('express')

var xsuaaCredentials
try {
  xsenv.loadEnv();
  const JWTStrategy = require("@sap/xssec").JWTStrategy
  const services = xsenv.getServices({ xsuaa: { tags: "xsuaa" }})
  xsuaaCredentials = services.xsuaa
  const jwtStrategy = new JWTStrategy(xsuaaCredentials)
  passport.use(jwtStrategy)
} catch (error) {
  console.warn(error.message)
}

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

cds.on('bootstrap', async (app) => {
  app.use('/appconfig', express.static('./app/webapp/appconfig/'))
  app.use(helmet({
    contentSecurityPolicy: false,
  }))
  app.use(proxy())

  // Authentication using JWT
  if(xsuaaCredentials) {
    app.use(jwtLogger)
    await app.use(passport.initialize())
    await app.use(
      passport.authenticate("JWT", { session: false })
    )  
  }
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
      })
    }
  })

  // Swagger / OpenAPI
  var options = {
    explorer: true
  }
	app.get('/api/api-docs.json', function(req, res) {
		res.setHeader('Content-Type', 'application/json')
		res.send(swaggerSpec)
	})   
  app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, options))

})

module.exports = cds.server // > delegate to default server.js
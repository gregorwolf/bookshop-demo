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
passport.use(new JWTStrategy(services.xsuaa))

// config
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4004
const csn = 'gen/csn.json'

;(async () => {
  // create new app
  const app = express()
  app.use(helmet())
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

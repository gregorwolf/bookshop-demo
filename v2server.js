// load modules
const express = require('express')
const cds = require('@sap/cds')
const proxy = require('@sap/cds-odata-v2-adapter-proxy')
const csn = 'srv/gen/csn.json'

const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./srv/gen/swagger.json')
// config
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4004;

(async () => {
  // create new app
  const app = express();
  app.use('/app', express.static('app/webapp/'))
  app.use('/appconfig', express.static('app/webapp/appconfig/'))

  app.get('/', function(req, res) {
    res.redirect('/app/fiori-local.html')
  })

  await cds.connect('db') // ensure database is connected!
  // serve odata v4
  await cds
    .serve('AdminService')
    .from(csn)
    .with('srv/admin-service.js')
    .in(app)

  await cds
    .serve('CatalogService')
    .from(csn)
    .with('srv/cat-service.js')
    .in(app)

  // Swagger / OpenAPI
  var options = {
    explorer: true
  }
	app.get('/api/api-docs.json', function(req, res) {
		res.setHeader('Content-Type', 'application/json')
		res.send(swaggerSpec)
	})   
  app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, options))

  // serve odata v2
  process.env.XS_APP_LOG_LEVEL = 'info'; // suppress debug logs
  app.use(proxy({
    // app
    path: 'v2',
    model: csn,
    // target
    port: port
  }))

  // start server
  const server = app.listen(port, host, () => console.info(`app is listing at ${port}`));
  server.on('error', error => console.error(error.stack));
})()
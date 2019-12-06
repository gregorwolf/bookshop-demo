// load modules
const express = require('express')
const cds = require('@sap/cds')
const proxy = require('@sap/cds-odata-v2-adapter-proxy')

// config
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4004
const csn = 'gen/csn.json'

;(async () => {
  // create new app
  const app = express()

  // serve odata v4
  await cds
    .connect('db') // ensure database is connected!
    .serve(csn)
    .with('admin-service.js')
    // .with('cat-service.js')
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

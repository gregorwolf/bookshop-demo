// load modules
const express = require('express');
const cds = require('@sap/cds');
const proxy = require('@sap/cds-odata-v2-adapter-proxy');

// config
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4004;

(async () => {
  // create new app
  const app = express();
  app.use('/', express.static('app/'))

  app.get('/', function(req, res) {
    res.redirect('/fiori.html')
  });

  // serve odata v4
  await cds
    .connect('db') // ensure database is connected!
    .serve('all')
    .in(app);

  // serve odata v2
  process.env.XS_APP_LOG_LEVEL = 'none'; // suppress debug logs
  app.use(proxy({
    // app
    path: 'v2',
    // target
    port: port
  }));

  // start server
  const server = app.listen(port, host, () => console.info(`app is listing at ${port}`));
  server.on('error', error => console.error(error.stack));
})();
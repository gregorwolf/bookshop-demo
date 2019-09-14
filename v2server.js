const proxy = require('@sap/cds-odata-v2-adapter-proxy')
const cds = require('@sap/cds')
const express = require('express')
const PORT = process.env.PORT || 4004

var app = express()
app.use('/', express.static('app/'))

cds.connect.to("db");
cds.serve('all').in(app)
app.use(proxy({ port: PORT })).listen(PORT)

const proxy = require('@sap/cds-odata-v2-adapter-proxy')
const cds = require('@sap/cds')
const app = require('express')()
const PORT = process.env.PORT || 4004;

cds.serve('all').in(app)
app.use(proxy({ port: PORT })).listen(PORT)

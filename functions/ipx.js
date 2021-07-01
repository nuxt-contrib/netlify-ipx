const { createIPX, createIPXMiddleware } = require('ipx')
const serverless = require('serverless-http')
const { resolve } = require('path')

const staticDir = resolve(__dirname, '..', 'static')

const ipx = createIPX({ dir: staticDir })

module.exports.handler = serverless(createIPXMiddleware(ipx))
// module.exports.handler = () => ({ statusCode: 200, body: staticDir })


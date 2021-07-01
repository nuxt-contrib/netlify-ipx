// const { createIPX, handleRequest } = require('ipx')
// const serverless = require('serverless-http')
// const { resolve } = require('path')
// const staticDir = resolve(__dirname, '..', 'static')
// const fetch = require("node-fetch")

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      event,
      context
    })
  }
}

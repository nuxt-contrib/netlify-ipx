const { createIPX, handleRequest } = require('ipx')

const ipx = createIPX({
  domains: [
    'images.unsplash.com'
  ]
})

exports.handler = async (event, _context) => {
  const host = event.headers.host
  const protocol = event.headers['x-forwarded-proto'] || 'http'
  const url = event.path.replace('/.netlify/functions/ipx', '').replace(/index\.htm$/, '')

  const [modifiers = '_', ...segments] = url.substr(1).split('/')
  let id = segments.join('/')
  let isLocal = !id.startsWith('http')
  if (isLocal) {
    id = `${protocol}://${host}/${id}`
  }

  const res = await handleRequest({
    url: `/${modifiers}/${id}`,
    headers: event.headers,
    options: {
      bypassDomain: isLocal
    }
  }, ipx)

  return {
    statusCode: res.statusCode,
    message: res.statusMessage,
    headers: res.headers,
    isBase64Encoded: typeof res.body !== 'string',
    body: typeof res.body === 'string' ? res.body : res.body.toString('base64')
  }
}

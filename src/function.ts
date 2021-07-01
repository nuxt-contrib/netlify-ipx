import { createIPX, handleRequest } from 'ipx'
import { builder } from '@netlify/functions'

export function createIPXHandler (opts = {}) {
  const ipx = createIPX({ ...opts })

  const handler = async (event, _context) => {
    const host = event.headers.host
    const protocol = event.headers['x-forwarded-proto'] || 'http'
    const url = event.path.replace('/.netlify/functions/ipx', '').replace(/index\.htm$/, '')

    const [modifiers = '_', ...segments] = url.substr(1).split('/')
    let id = segments.join('/')
    const isLocal = !id.startsWith('http')
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

  return builder(handler)
}

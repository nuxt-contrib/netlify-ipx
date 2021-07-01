import { createIPXHandler } from 'netlify-plugin-ipx/function'

export const handler = createIPXHandler({
  domains: ['images.unsplash.com']
})

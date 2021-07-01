import { createIPXHandler } from 'netlify-plugin-ipx'

export const handler = createIPXHandler({
  domains: ['images.unsplash.com']
})

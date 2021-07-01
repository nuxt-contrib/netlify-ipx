import { promises as fsp } from 'fs'
import { resolve } from 'path'

// https://docs.netlify.com/configure-builds/build-plugins/create-plugins/

export default {
  async onPreBuild({ constants }) {
    console.log('netlify-plugin-ipx')
    await fsp.writeFile(resolve(constants.FUNCTIONS_SRC, 'ipx.ts'), `
      import { createIPXHandler } from 'netlify-plugin-ipx'
      export const handler = createIPXHandler({
        domains: ['images.unsplash.com']
      })
    `, 'utf8')
  }
}

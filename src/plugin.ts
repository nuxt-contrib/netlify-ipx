import { promises as fsp } from 'fs'
import { resolve, dirname } from 'path'
import mkdirp from 'mkdirp'

// https://docs.netlify.com/configure-builds/build-plugins/create-plugins/

export default {
  async onPreBuild ({ constants }) {
    console.log('netlify-plugin-ipx') // eslint-disable-line no-console
    const fnFile = resolve(constants.FUNCTIONS_SRC, 'ipx.ts')
    await mkdirp(dirname(fnFile))
    await fsp.writeFile(fnFile, `
      import { createIPXHandler } from 'netlify-plugin-ipx/function'
      export const handler = createIPXHandler({
        domains: ['images.unsplash.com']
      })
    `, 'utf8')
  }
}

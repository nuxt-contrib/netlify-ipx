# Netlify Optimized Images

> on-demand image optimazation for Netlify using [ipx](https://github.com/unjs/ipx).

✨ Online demo: https://netlify-ipx.netlify.app

## Usage

Add `netlify-plugin-ipx` as devDependency:

```sh
# npm
npm i -D netlify-plugin-ipx

# yarn
yarn add --dev netlify-plugin-ipx
```

Create `netlify/functions/ipx.ts`:

```ts
import { createIPXHandler } from 'netlify-plugin-ipx/function'

export const handler = createIPXHandler({
  domains: ['images.unsplash.com']
})
```


## Local development

- Clone repository
- Install dependencies with `yarn install`
- Install netlify development server with `yarn dev`
- Open http://localhost:8888

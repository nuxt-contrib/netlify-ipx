# Netlify Optimized Images

> On Demand image optimazation for Netlify using [ipx](https://github.com/unjs/ipx).

😺 Online demo: https://netlify-ipx.netlify.app

## Usage

Add `netlify-plugin-ipx` as `devDependency`:

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

Now you can use IPX to optimize both local and remote assets ✨

Resize `/test.jpg` (in `dist`):

```html
<img src="/.netlify/functions/ipx/w_200/static/test.jpg"/>
```

Resize and change format for a remote url:

```html
<img src="/.netlify/functions/ipx/f_webp,w_450/https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"/>
```

## Local development

- Clone repository
- Install dependencies with `yarn install`
- Install netlify development server with `yarn dev`
- Open http://localhost:8888

## License

MIT

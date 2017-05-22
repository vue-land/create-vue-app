# <%= name %>

> <%= description %>

## Commands

You can replace `yarn` with `npm run` here.

```bash
# build for production
yarn build

# development mode
yarn dev<% if (karma) { %>

# run unit tests with karma
yarn test<% } %>

# serve the bundled dist folder in production mode
yarn serve
```

## Polyfills

By default we only polyfill `window.Promise` and `Object.assign`. You can add more polyfills in `./src/polyfills.js`.

<% if (karma) { %>
## Test

By default Karma uses mocha and chrome to run your tests, you can choose your own assetion library like [chai](http://chaijs.com).

To run it in watch mode, you can type: `yarn test -- --watch`.

For all the available options, please head to [poi-preset-karma](https://github.com/egoist/poi/tree/master/packages/poi-preset-karma#options).<% } %>
<% if (pwa){ %>
## Progress Web App

Your app is now offline-ready (only in production bundle), which means you can visit it without network.<% if (manifest) { %>

Here we use a default [manifest.json](./static/manifest.json) to configurure your pwa, for example, to enable [Add to Home Screen] feature on Android. It will be copied directly to `./dist/manifest.json`.

<% } %>
For all the available options, please head to [poi-preset-offline](https://github.com/egoist/poi/tree/master/packages/poi-preset-offline#api).
<% } %>
---

This project is generated from [template-vue](https://github.com/egoist/template-vue).

const path = require('path')<% if (pwa) { %>
const OfflinePlugin = require('offline-plugin')<% } %>

module.exports = options => ({
  entry: 'src/index.js',<% if (type === 'electron') { %>
  dist: 'app/dist',<% } %>
  postcss: [
    // add more postcss plugins here
    // by default we have autoprefixer pre added
  ],<% if (type === 'electron') { %>
  env: {
    APP_MODULES: path.resolve('./app/node_modules')
  },
  // resource in electron app must be loaded from relative path in production mode
  homepage: './',<% } %>
  webpack(config) {
    <%_ if (type === 'electron') { -%>
    config.target = 'electron-renderer'
    // exclude dependencies in app folder from bundling
    const appDeps = require('./app/package').dependencies || {}
    config.externals = Object.keys(appDeps).map((curr, name) => {
      curr[name] = `commonjs ${name}`
      return curr
    }, {})
    <%_ } -%>
    <%_ if (pwa) { -%>
    // inject offline-plugin in production build
    if (!options.dev) {
      config.plugins.push(new OfflinePlugin({
        ServiceWorker: {
          events: true
        }
      }))
    }
    <%_ } -%>

    return config
  }
})

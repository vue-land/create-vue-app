const path = require('path')<% if (pwa) { %>
const OfflinePlugin = require('offline-plugin')<% } %>

// this will copy ./static/** to ./dist/**
module.exports = options => ({
  entry: 'src/index.js',<% if (type === 'electron') { %>
  dist: 'app/dist',<% } %>
  postcss: [
    // add more postcss plugins here
    // by default we have autoprefixer pre added
  ],
  webpack(config) {
    config.resolve.modules.push(path.resolve('src'))
    <% if (type === 'electron') { %>
    if (!options.dev) {
      config.output.publicPath = './'
    }
    config.target = 'electron-renderer'
    <% } %><% if (pwa) { %>
    config.plugins.push(new OfflinePlugin({
      ServiceWorker: {
        events: true
      }
    }))<% } %>

    return config
  }
})

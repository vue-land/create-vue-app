const fs = require('fs')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  port: 5000,
  entry: 'src/index.js',
  html: {
    title: '{{ name }}',
    template: 'src/template.html'
  },
  postcss: {
    // the plugins here will be appended to default plugins: [autoprefixer]
    plugins: [
      require('postcss-nested')()
    ]
  },
  webpack(config, options, webpack) {
    if (options.production && !options.lib) {
      // Split vendor code and app code
      config.entry.vendor = ['vue']
      config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
          names: ['vendor', 'manifest']
        })
      )

      // only apply eslint-loader in production mode
      config.module.rules.push({
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre'
      })
    }

    return config
  }
}

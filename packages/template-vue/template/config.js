const fs = require('fs')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  port: 5000,
  entry: 'src/index.js',
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
    }

    // copy static/** to dist/**
    // useful for adding favicon.ico too
    if (fs.existsSync('static')) {
      config.plugins.push(new CopyPlugin([{
        from: 'static',
        to: './'
      }]))
    }

    return config
  }
}
const karma = require('vbuild-karma')

module.exports = {
  // in test we don't need to split vendor code and minimize it
  vendor: false,
  minimize: false,
  sourceMap: false,
  // run custom build process
  run(webpackConfig) {
    karma(webpackConfig)
  }
}

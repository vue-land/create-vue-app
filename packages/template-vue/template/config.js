module.exports = {
  port: 5000,
  entry: 'src/index.js',
  postcss: {
    plugins: [
      require('postcss-nested')()
    ]
  }
}
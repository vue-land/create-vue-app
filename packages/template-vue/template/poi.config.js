const path = require('path')
const pkg = require('./package')

module.exports = {
  entry: 'src/index.js',
  html: {
    title: '{{ name }}',
    description: pkg.descrption,
    template: path.join(__dirname, 'index.ejs')
  },
  postcss: {
    plugins: [
      require('postcss-nested')()
    ]
  },
  presets: [{{#karma}}
    require('poi-preset-karma')({
      files: 'src/**/*.test.js'
    })
  {{/karma}}]
}

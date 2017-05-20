const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: `What's the name of your new project`,
      default: ':folderName:'
    },
    description: {
      message: 'How would your descripe your superb project',
      default: `My ${superb()} Vue project`
    },
    karma: {
      type: 'confirm',
      default: false,
      message: 'Setup unit tests with Karma'
    },
    pwa: {
      type: 'confirm',
      default: true,
      message: 'Add Progress Web App support'
    },
    manifest: {
      type: 'confirm',
      default: true,
      when: 'pwa',
      message: 'Use default manifest.json and icons for PWA'
    },
    username: {
      message: `What's your GitHub username`,
      default: ':gitUser:'
    },
    email: {
      message: `What's your GitHub email`,
      default: ':gitEmail:'
    }
  },
  move: {
    'gitignore': '.gitignore'
  },
  filters: {
    '**/*.test.js': 'karma',
    'src/pwa.js': "pwa",
    'static/manifest.json': 'manifest',
    'static/icons/**': 'manifest'
  },
  skipInterpolation: ['index.ejs'],
  gitInit: true,
  installDependencies: true,
  showTip: true
}

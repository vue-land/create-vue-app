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
    test: {
      type: 'list',
      default: 'disable',
      message: 'Choose a test runner for unit tests',
      choices: [
        { name: 'Disable', value: 'disable' },
        { name: 'AVA', value: 'ava' },
        { name: 'Karma', value: 'karma' }
      ],
      store: true
    },
    pwa: {
      type: 'confirm',
      default: true,
      message: 'Add Progressive Web App (PWA) support',
      store: true
    },
    manifest: {
      type: 'confirm',
      default: true,
      when: 'pwa',
      message: 'Use default manifest.json and icons for PWA',
      store: true
    },
    username: {
      message: `What's your GitHub username`,
      default: ':gitUser:',
      store: true
    },
    email: {
      message: `What's your GitHub email`,
      default: ':gitEmail:',
      store: true
    }
  },
  move: {
    gitignore: '.gitignore'
  },
  filters: {
    'src/components/App.test.js': 'test === "karma"',
    'src/pwa.js': 'pwa',
    'static/manifest.json': 'manifest',
    'static/icons/**': 'manifest',
    'test/**': 'test === "ava"'
  },
  gitInit: true,
  installDependencies: true,
  post(_) {
    _.showTip()
    console.log(_.chalk.cyan('\n  To develop it:'))
    console.log('\n    yarn dev')

    console.log(_.chalk.cyan('\n  To build for production:'))
    console.log('\n    yarn build')

    console.log(
      _.chalk.dim('\n  For more usages, please check out ./README.md')
    )
    console.log()
  }
}

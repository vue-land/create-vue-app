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
    'src/pwa.js': 'pwa',
    'static/manifest.json': 'manifest',
    'static/icons/**': 'manifest'
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

const superb = require('superb')

module.exports = {
  template: 'handlebars',
  prompts: {
    name: {
      message: `What's the name of your new project?`,
      role: 'folder:name'
    },
    description: {
      message: 'How would your descripe your superb project?',
      default: `My ${superb()} Vue project`
    },
    username: {
      message: `What's your GitHub username`,
      role: 'git:name'
    },
    email: {
      message: `What's your GitHub email`,
      role: 'git:email'
    },
    electron: {
      message: 'Support Electron?',
      type: 'confirm',
      default: false
    }
  },
  filters: {
    'app/**': 'electron'
  },
  post({isNewFolder, folderName, chalk, install, init, answers}) {
    install()
    init()
    console.log(chalk.green('\n  To get started:\n'))
    if (isNewFolder) {
      console.log(`  cd ${folderName}`)
    }
    console.log('  yarn dev')

    if (answers.electron) {
      console.log('  yarn app', chalk.dim(' # In another tab\n'))
    } else {
      console.log(chalk.green('\n  To build for production:\n'))
      console.log('  yarn build\n')
    }
  }
}
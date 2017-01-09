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
    }
  },
  post({isNewFolder, folderName, chalk}) {
    console.log(chalk.green('\n  To get started:\n'))
    if (isNewFolder) {
      console.log(`  cd ${folderName}`)
    }
    console.log('  yarn install')
    console.log('  yarn dev')

    console.log(chalk.green('\n  To build for production:\n'))
    console.log('  yarn build\n')
  }
}
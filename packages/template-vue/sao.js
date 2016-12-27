const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: `What's the name of your new project?`,
      role: 'name'
    },
    description: {
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
  post({targetFolder, chalk}) {
    console.log(chalk.green('\n  To get started:\n'))
    if (targetFolder !== './') {
      console.log(`  cd ${targetFolder}`)
    }
    console.log('  yarn install')
    console.log('  yarn dev')

    console.log(chalk.green('\n  To build for production:\n'))
    console.log('  yarn build\n')
  }
}
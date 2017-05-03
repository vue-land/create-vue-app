const superb = require('superb')

module.exports = {
  template: 'handlebars',
  prompts: {
    name: {
      message: `What's the name of your new project?`,
      default: ':folderName:'
    },
    description: {
      message: 'How would your descripe your superb project?',
      default: `My ${superb()} Vue project`
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
  gitInit: true,
  installDependencies: true,
  showTip: true
}
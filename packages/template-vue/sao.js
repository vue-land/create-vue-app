const superb = require('superb')

module.exports = {
  template: 'handlebars',
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
      message: 'Add Karma to run unit tests'
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
    '**/*.test.js': 'karma'
  },
  gitInit: true,
  installDependencies: true,
  showTip: true
}

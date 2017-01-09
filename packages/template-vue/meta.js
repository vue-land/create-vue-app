module.exports = {
  prompts: {
    name: {
      message: `Project name`,
    },
    description: {
      message: 'How would your descripe your superb project?',
      default: `My superb Vue project`
    },
    username: {
      message: `What's your GitHub username`,
      default: ''
    },
    email: {
      message: `What's your GitHub email`,
      default: ''
    }
  },
  completeMessage: 'To get started:\n\n  cd {{destDirName}}\n  yarn\n  yarn dev\n'
}
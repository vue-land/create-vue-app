#!/usr/bin/env node
const yargs = require('yargs')
const chalk = require('chalk')
const pkg = require('../package')

const argv = yargs
  .usage('\ncva <project-name>')
  .version(pkg.version)
  .alias('h', 'help')
  .alias('v', 'version')
  .epilogue('for more information, find our manual at http://github.com/egoist/create-vue-app')
  .help()
  .argv

const name = argv._[0]
delete argv._

const options = Object.assign({
  name
}, argv)

process.stdout.write('\x1Bc')
require('./init')(options).catch(err => {
  console.log()
  console.log(chalk.bgRed.black(' ERROR '), 'Error occurs during initializing a new project:\n')
  if (err.name === 'AppError') {
    console.log(chalk.red(err.message))
  } else {
    console.log(err.stack)
  }
  console.log()
  process.exit(1)
})

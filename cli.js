#!/usr/bin/env node
const path = require('path')
const spawn = require('cross-spawn')
const yargs = require('yargs')
const pkg = require('./package')

const cli = yargs
  .option('sao-version', {
    desc: 'Display the version of package "sao"'
  })
  .option('template-version', {
    desc: 'Display the version of package "template-vue"'
  })
  .example('$0 my-project', 'Generate a new project in "my-project" folder')
  .epilogue('If you have any problems, do not hesitate to file an issue:\n https://github.com/egoist/create-vue-app/issues/new')
  .alias('v', 'version')
  .alias('h', 'help')
  .version(pkg.version)
  .help()
  .argv

if (cli.templateVersion) {
  console.log(`template-vue@${require('template-vue/package').version}`)
  process.exit()
}

if (cli.saoVersion) {
  console.log(`sao@${require('sao/package').version}`)
  process.exit()
}

const sao = require.resolve('sao/bin/sao')

const argv = process.argv.slice(2)
const templatePath = path.dirname(require.resolve('template-vue/package'))
argv.unshift(templatePath)

// Run `sao $template $argv`
spawn.sync(sao, argv, { stdio: 'inherit' })

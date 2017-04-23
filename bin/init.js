/* eslint-disable unicorn/no-process-exit */
const fs = require('fs')
const path = require('path')
const co = require('co')
const $ = require('shelljs')
const tildify = require('tildify')
const superb = require('superb')
const install = require('yarn-install')
const kopy = require('kopy')
const chalk = require('chalk')
const inquirer = require('inquirer')
const _ = require('../lib/utils')
const AppError = require('../lib/app-error')

module.exports = co.wrap(function * (options) {
  if (!options.name) {
    throw new AppError('> A folder name is required to perform this action!')
  }

  const dest = _.cwd(options.name)

  if (!options.force && fs.existsSync(dest)) {
    const {overWrite} = yield inquirer.prompt([{
      name: 'overWrite',
      type: 'confirm',
      message: `Directory ${chalk.yellow(tildify(dest))} already exists, confirm to overwrite it anyway?`,
      default: false
    }])
    if (!overWrite) {
      throw new AppError('> Aborted.')
    }
  }

  let usePrompts = options.prompts

  const defaults = Object.assign({
    type: '',
    moduleName: '',
    description: `My ${superb()} Vue app`,
    pwa: false
  }, options)

  if (defaults.type) {
    usePrompts = false
    console.log('> Detected project type from CLI arguments, skipped prompts.')
  }

  const prompts = [
    {
      name: 'name',
      default: defaults.name,
      message: 'Choose the name for your new project:'
    },
    {
      name: 'description',
      default: defaults.description,
      message: 'Briefly describe your new project:'
    },
    {
      name: 'type',
      type: 'list',
      message: 'Choose the type of your new project:',
      choices: [{
        name: 'Web app',
        value: 'web'
      }, {
        name: 'Electron app',
        value: 'electron'
      }, {
        name: 'Vue Component',
        value: 'component'
      }]
    },
    {
      name: 'moduleName',
      message: `What's the exported module name of the component? (in umd format)`,
      when: answers => answers.type === 'component',
      default(answers) {
        return answers.name.replace(/[-_.]([\w])/, (_, p1) => p1.toUpperCase())
      }
    },
    {
      name: 'pwa',
      message: 'Do you want to add progressive web app support? (require https in production)',
      type: 'confirm',
      default: defaults.pwa,
      when: answers => answers.type === 'web'
    }
  ]

  const kopyOptions = {
    filters: {
      'app/**': 'type === "electron"',
      'src-normal/**': 'type !== "component"',
      'src-component/**': 'type === "component"',
      'example/**': 'type === "component"',
      'vbuild.config.js': 'type !== "component"',
      'vbuild.{example,component}.js': 'type === "component"',
      'static/favicon.ico': 'type !== "electron"',
      'src-normal/pwa.js': 'pwa',
      'index.html': 'electron'
    }
  }

  if (usePrompts === false) {
    kopyOptions.data = defaults
  } else {
    kopyOptions.prompts = prompts
    kopyOptions.data = defaults
  }

  const {files, merged} = yield kopy(_.ownDir('template'), dest, kopyOptions)

  console.log()

  for (const file of files) {
    console.log(`${chalk.green('Generating')} · ${file}`)
  }
  for (const file of ['gitignore', 'editorconfig']) {
    move(dest, file, `.${file}`)
  }
  if (merged.type === 'component') {
    move(dest, 'src-component', 'src')
    move(dest, 'src/Component.vue', `src/${merged.moduleName}.vue`)
  } else {
    move(dest, 'src-normal', 'src')
  }

  console.log('\n> Installing vbuild in project:')
  console.log('> https://github.com/egoist/vbuild\n')
  install({cwd: dest})

  console.log(`\n${chalk.bgGreen.black(' DONE ')} Successfully generated into ${chalk.yellow(tildify(dest))}!\n`)

  console.log(chalk.green('- To get started:'))
  console.log(`\n  cd ${merged.name}`)
  if (merged.type === 'component') {
    console.log('  yarn example\n')
  } else {
    console.log('  yarn dev\n')
  }
  if (merged.type === 'electron') {
    console.log(chalk.green('- In another tab:\n'))
    console.log('  yarn app\n')
  }

  if (merged.type === 'component') {
    console.log(chalk.green('- To deploy example:'))
    console.log(`\n  yarn deploy ${chalk.dim('# build and push to gh-pages')}\n`)
    console.log(chalk.green('- To distribute component:'))
    console.log(`\n  yarn build:cjs  ${chalk.dim('# commonjs format')}`)
    console.log(`  yarn build:umd  ${chalk.dim('# umd format')}`)
    console.log(`  yarn build      ${chalk.dim('# both format')}\n`)
  } else {
    console.log(chalk.green('- To build for production:'))
    console.log('\n  yarn build\n')
  }

  console.log(chalk.bold(`For more usage, please view ${merged.name}/README.md\n`))
})

function move(dir, from, to) {
  console.log(`${chalk.magenta('Moving    ')} · ${from} -> ${to}`)
  const dest = path.join(dir, to)
  $.rm('-rf', dest)
  $.mv(path.join(dir, from), dest)
}

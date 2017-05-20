#!/usr/bin/env node
const path = require('path')
const spawn = require('cross-spawn')

const sao = require.resolve('sao/bin/sao')

const argv = process.argv.slice(2)
const templatePath = path.dirname(require.resolve('template-vue/package'))
argv.unshift(templatePath)

// Run `sao $template $argv`
spawn.sync(sao, argv, { stdio: 'inherit' })

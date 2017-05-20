# template-vue

[![NPM version](https://img.shields.io/npm/v/template-vue.svg?style=flat)](https://npmjs.com/package/template-vue) [![NPM downloads](https://img.shields.io/npm/dm/template-vue.svg?style=flat)](https://npmjs.com/package/template-vue) [![CircleCI](https://circleci.com/gh/egoist/template-vue/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/template-vue/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

Scaffold out a Vue.js project which uses Poi.

## Features

- No config until you need, thanks to [Poi](https://github.com/egoist/poi).
- Unit tests with Karma, thanks to [poi-preset-karma](https://github.com/egoist/poi/tree/master/packages/poi-preset-karma)
- Progressive Web App by default, thanks to [poi-preset-offline](https://github.com/egoist/poi/tree/master/packages/poi-preset-offline) and [offline-plugin](https://github.com/NekR/offline-plugin).

## Install

Using [SAO](https://github.com/egoist/sao).

```bash
# Install sao first
yarn global add sao

# Generate project from git repo
sao egoist/template-vue folder-name
# Or from npm
sao vue folder-name
```

You may also like [create-vue-app](https://github.com/egoist/create-vue-app) which is a wrapper of SAO and this template, so you don't need to install these two packages manually.

[Check out the usage of this template here.](/template/README.md).

## License

MIT
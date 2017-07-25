# create-vue-app

[![NPM version](https://img.shields.io/npm/v/create-vue-app.svg?style=flat)](https://npmjs.com/package/create-vue-app) [![NPM downloads](https://img.shields.io/npm/dm/create-vue-app.svg?style=flat)](https://npmjs.com/package/create-vue-app) [![CircleCI](https://circleci.com/gh/egoist/create-vue-app/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/create-vue-app/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Features

- No config until you need, thanks to [Poi](https://github.com/egoist/poi).
  - Support all CSS preprocessors and CSS modules
  - Hot mode reloading
- Unit tests with [AVA](https://github.com/avajs/ava) or Karma, thanks to [poi-preset-karma](https://github.com/egoist/poi/tree/master/packages/poi-preset-karma)
- Progressive Web App by default, thanks to [poi-preset-offline](https://github.com/egoist/poi/tree/master/packages/poi-preset-offline) and [offline-plugin](https://github.com/NekR/offline-plugin).

## Install

```bash
yarn global add create-vue-app
```

## Usage

```bash
# Generate project in cwd
mkdir my-vue-app && cd my-vue-app
create-vue-app

# Generate project in specific folder
create-vue-app my-vue-app
cd my-vue-app
```

Alternatively, if you have Yarn^0.24, you can use the `yarn create` command:

```bash
yarn create vue-app my-vue-app
```

## Recipes

- [Unit Test](./docs/unit-test.md)

## FAQ

### Where are the docs?

**This project is using Poi under the hood**, so for most questions, hopefully go to [this page](https://poi.js.org/#/home) and you will get the answer.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**create-vue-app** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/create-vue-app/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)

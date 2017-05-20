# create-vue-app

[![NPM version](https://img.shields.io/npm/v/create-vue-app.svg?style=flat)](https://npmjs.com/package/create-vue-app) [![NPM downloads](https://img.shields.io/npm/dm/create-vue-app.svg?style=flat)](https://npmjs.com/package/create-vue-app) [![CircleCI](https://circleci.com/gh/egoist/create-vue-app/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/create-vue-app/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## How does this work?

This is a [CLI](https://en.wikipedia.org/wiki/CLI) that wraps [SAO](https://github.com/egoist/sao) and [template-vue](https://github.com/egoist/template-vue), so running `create-vue-app my-app` is equivalent to running `sao vue my-app`.

Basically this is similar to `create-react-app` and `template-vue` uses [Poi](https://poi.js.org) under the hood.

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

For details about folder structure please head to [template-vue](https://github.com/egoist/template-vue).

For more usages on Poi please head to its [documentation](https://poi.js.org/#/home).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**create-vue-app** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/create-vue-app/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)

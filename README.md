# Create Vue App

[![NPM version](https://img.shields.io/npm/v/create-vue-app.svg?style=flat)](https://npmjs.com/package/create-vue-app) [![NPM downloads](https://img.shields.io/npm/dm/create-vue-app.svg?style=flat)](https://npmjs.com/package/create-vue-app) [![Build Status](https://img.shields.io/circleci/project/egoist/create-vue-app/master.svg?style=flat)](https://circleci.com/gh/egoist/create-vue-app) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## tl;dr

```bash
yarn global add create-vue-app
create-vue-app my-app --type=web
cd my-app
yarn dev
```

And then you can go to `http://localhost:4000` and start coding!

<img src="https://cloud.githubusercontent.com/assets/8784712/23340906/761acafa-fc79-11e6-9586-c9dbb2b959c0.png" width="540" />

## Install

You can use `npm` if you like, but `yarn` would save a lot time here.

```bash
yarn global add create-vue-app
```

## Usage

```bash
create-vue-app my-app
# you can also use the alias `cva`
# cva my-app
```

And you're all set, follow the instructions in terminal and start writing app!

<img src="https://cloud.githubusercontent.com/assets/8784712/23341568/f9c9904c-fc84-11e6-9d70-0de443bb4140.png" width="540" />

### Unit tests

We use [vbuild-karma](https://github.com/egoist/vbuild-karma) to test your components:

<img src="https://ooo.0o0.ooo/2017/03/15/58c821c720711.png" width="540" alt="test" />

## CLI args

You can always omit CLI args to enter interactive CLI interface.

### `--type`

App type, oneOf: `web` `component` `electron`.

## FAQ

<details><summary>Is it similar to create-react-app?</summary>

Absolutely yes, you can already tell from the name ;)

Both `create-vue-app` and `create-react-app` are aiming for developing app with no-config.
</details>

<details><summary>How does this work?</summary>

You may know that `create-react-app` is using [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts) under the hood, while we are using [vbuild](https://github.com/egoist/vbuild).

The difference is that, it's hard to gracefully use `react-scripts` in other React projects, while `vbuild` can work indepently. You can use `vbuild` in a similar way to how you use `react-scripts`, a.k.a. no-config. It automatically uses data from your package.json and enviroment variables, etc. But you can also use a config file to put all configs in one place, eg: `vbuild.config.js` or `vbuild` field in `package.json`.

This project starts as a built-in command called `vbuild init` in vbuild itself. But we think it's not a must for `vbuild` and can be handled elsewhere. So it turned into `create-vue-app`.
</details>

<details><summary>How to upgrade?</summary>

Simply upgrade `vbuild` in your project, eg: `yarn upgrade vbuild`
</details>

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

# template-vue

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
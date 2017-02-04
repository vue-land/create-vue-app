# template-vue

A vue-cli template.

## Features

- Basic setup requires no config, you only need [vue-cli](https://github.com/vuejs/vue-cli), but you can still use [config.js](/template/config.js) to customize it
- Copy `static/**` to dist folder, useful for adding `favicon.ico`
- Split vendor code and app code in production mode
- ESLint with [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) in production mode
- Support Electron
- Ready for small-to-medium Vue apps, and it can be easily extended to be a larger project.

## Install

### vue-cli

```bash
vue init egoist/template-vue vue-app
```

### sao

Using [SAO](https://github.com/egoist/sao).

```bash
# install sao first
yarn global add sao

# from repo
sao egoist/template-vue vue-app
# or from npm
sao vue vue-app
```

[Check out the usage of this template.](/template/README.md)

## License

MIT
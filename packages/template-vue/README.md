# template-vue

A vue-cli template.

## Features

- Basic setup requires no config, you only need [vue-cli](https://github.com/vuejs/vue-cli), but you can still use [config.js](/template/config.js) to customize it
- Copy `static/**` to dist folder, useful for adding `favicon.ico`
- Split vendor code and app code in production mode
- ESLint with [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) in production mode
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

### Commands

You can replace `yarn` with `npm run` here.

```bash
# build for production
yarn build

# development mode
yarn dev

# serve the bundled dist folder in production mode
yarn serve
```

## License

MIT
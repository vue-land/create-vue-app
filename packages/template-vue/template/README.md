# {{ name }}

> {{ description }}

## Folder structure

- `src/`: Main app folder
  - `components`: Vue components
    - `App.vue`: The root component
  - `index.js`: Webpack entry file
  - `template.html`: Template for generated `index.html`, using [ejs](http://ejs.co) syntax
- `app/`: App folder for Electron main process (if you enabled `Electron`)
  - `index.js`: Electron app entry file
- `static/`: Static files that will be copied to `dist/` folder
  - `favicon.icon`: Default favicon
- `.eslintrc`: ESLint rules
- `config.js`: Configurations for `vue build` command. [docs](https://github.com/vuejs/vue-cli/blob/master/docs/build.md).
- ...other files

Notes that in Electron mode the dist folder is `./dist` by default, otherwise it's `app/dist` folder.

### Commands

You can replace `yarn` with `npm run` here.

#### Web app

```bash
# build for production
yarn build

# development mode
yarn dev

# serve the bundled dist folder in production mode
yarn serve
```

#### Electron app

```bash
# build for production
yarn build

# development mode
yarn dev

# open app
yarn app
```

Distribute your Electron app:

```bash
# build first for packaging
yarn build

# mac
yarn mac

# windows
yarn win

# linux
yarn linux
```

## More

This project is generated from [template-vue](https://github.com/egoist/template-vue).

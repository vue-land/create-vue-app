# {{ name }}

> {{ description }}

## Folder structure

- `src/`: Main app folder
  - `components`: Vue components
    - `App.vue`: The root component
  - `index.js`: Webpack entry file
  - `template.html`: Template for generated `index.html`, using [ejs](http://ejs.co) syntax
- `static/`: Static files that will be copied to `dist/` folder
  - `favicon.icon`: Default favicon
- `.eslintrc`: ESLint rules
- `config.js`: Configurations for `vue build` command. [docs](https://github.com/vuejs/vue-cli/blob/master/docs/build.md).
- ...other files

## More

This project is generated from [template-vue](https://github.com/egoist/template-vue).

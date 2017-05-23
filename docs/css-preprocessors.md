# CSS preprocessors

All the CSS extension we support:

- .css
- .scss
- .sass
- .less
- .styl
- .stylus

If you're using anything other than `.css` extension, you need to install its loader to make it work. eg. for `.scss` file you will need to:

```bash
yarn add node-sass sass-loader --dev
```

To use it in JS file:

```js
import './my-style.scss'
```

To use it in single-file component:

```vue
<style lang="scss">
  $translucent-red: rgba(255, 0, 0, 0.5);
  p {
    color: opacify($translucent-red, 0.3);
    background-color: transparentize($translucent-red, 0.25);
  }
</style>
```

Note that `postcss-loader` will be applied to all extensions that are listed here.

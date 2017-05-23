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

To use it in single-file component, for another example,  `less`:

```vue
<style lang="less">
  @nice-blue: #5B83AD;
  @light-blue: @nice-blue + #111;

  #header {
    color: @light-blue;
  }
</style>
```

Note that `postcss-loader` will be applied to all extension that are listed here.

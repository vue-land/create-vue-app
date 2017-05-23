# CSS modules

## Single file component

`vue-loader` has built-in CSS modules support, so you can use it like this:

```vue
<template>
  <div :class="$style.foo">hello</div>
</template>

<style module>
  .foo {
    color: red;
  }
</style> 
```

## Standalone CSS file

Thanks to the Webpack toolkit a.k.a [Poi](https://poi.js.org/#/) we use, any file ending with `.module.css` has out-of-box CSS modules support.

Note that other extensions like `.module.less` `.module.scss` work too :D

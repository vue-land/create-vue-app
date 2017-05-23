# Unit Test

To test your Vue component, you can enable either `AVA` or `Karma` during the process of generating a new project.

![preview](https://ooo.0o0.ooo/2017/05/23/592448b0b54f0.png)

## AVA

Basically the default setup is based on AVA's offical [Vue.js recipe](https://github.com/avajs/ava/blob/master/docs/recipes/vue.md).

Check out `./test/test.js` for an example test case, and `./test/helpers/setup.js` for how we transform `.vue` and `.js` files.

## Karma

By default Karma uses mocha and chrome to run your tests, you can choose your own assetion library like [chai](http://chaijs.com).

To run it in watch mode, you can type: `yarn test -- --watch`.

For all the available options, please head to [poi-preset-karma](https://github.com/egoist/poi/tree/master/packages/poi-preset-karma#options)

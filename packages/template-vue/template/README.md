# {{ name }}

> {{ description }}

## Commands

You can replace `yarn` with `npm run` here.

```bash
# build for production
yarn build

# development mode
yarn dev{{#karma}}

# run unit tests with karma
yarn test{{/karma}}

# serve the bundled dist folder in production mode
yarn serve
```

{{#karma}}
## Test

By default Karma uses mocha and chrome to run your tests, you can choose your own assetion library like [chai](http://chaijs.com).

To run it in watch mode, you can type: `yarn test -- --watch`.

For all the available options, please head to [poi-preset-karma](https://github.com/egoist/poi/tree/master/packages/poi-preset-karma#options).
{{/karma}}

---

This project is generated from [template-vue](https://github.com/egoist/template-vue).

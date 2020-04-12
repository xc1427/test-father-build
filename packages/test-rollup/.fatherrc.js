export default {
  file: 'foo',
  esm: {
    type: 'rollup',
    mjs: true,
  },
  cjs: {
    type: 'rollup',
  },
  umd: {
    name: 'FooTestRollup',
    sourcemap: true,
    globals: {
      jquery: '$',
    },
  },
  extraExternals: ['jquery'],
}
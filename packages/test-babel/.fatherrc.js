export default {
  file: 'foo2',
  esm: {
    type: 'babel',
    minify: true,
  },
  cjs: {
    type: 'babel',
    minify: true,
  },
  umd: {
    name: 'Foo2TestBabel',
    sourcemap: true,
  },
}
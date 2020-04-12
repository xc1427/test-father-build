## steps
```shell
npx lerna run build

# or

npx father build
```

## inspection
1. 看到 babel 和 rollup 打包方式的不同
2. 在 test-rollup 中我们可以看到约定式 external 的作用，也可以看到配置了 extraExternal 和 globals 后对于 foo.umd.js 的作用（当 umd 时，只有 peerDependency 才会被 external, 而 jquery 位于 dependency, 所有要添加到 extraExternal）

```
  (global = global || self, global.FooTestRollup = factory(global.$));
}(this, (function (jquery) { 'use strict';
```
> 文档中说 "打包方式 babel 时无需考虑 external，因为是文件到文件的编译，不处理文件合并" 是不全面的。当 babel 打包为 umd 时，还是会考虑 external 的。
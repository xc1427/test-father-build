(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, global.FooTestRollup = factory(global.$));
}(this, (function (jquery) { 'use strict';

  jquery = jquery && jquery.hasOwnProperty('default') ? jquery['default'] : jquery;

  function getHello () {
    return 'hello';
  }

  function index (text) {
    var helloText = getHello();
    console.log('jquery.noop', jquery.noop);
    jquery.noop();
    return "".concat(helloText, " : ").concat(text);
  }

  return index;

})));
//# sourceMappingURL=foo.umd.js.map

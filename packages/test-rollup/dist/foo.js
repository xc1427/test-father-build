'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jquery = _interopDefault(require('jquery'));

function getHello () {
  return 'hello';
}

function index (text) {
  var helloText = getHello();
  console.log('jquery.noop', jquery.noop);
  jquery.noop();
  return "".concat(helloText, " : ").concat(text);
}

module.exports = index;

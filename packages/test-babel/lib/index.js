"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _hello = _interopRequireDefault(require("./hello"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(text) {
  var helloText = (0, _hello.default)();
  console.log('jquery.noop', _jquery.default.noop);

  _jquery.default.noop();

  return "".concat(helloText, " : ").concat(text);
}
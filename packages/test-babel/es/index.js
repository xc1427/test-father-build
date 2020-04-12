import getHello from './hello';
import jquery from 'jquery';
export default function (text) {
  var helloText = getHello();
  console.log('jquery.noop', jquery.noop);
  jquery.noop();
  return "".concat(helloText, " : ").concat(text);
}
import jquery from 'jquery';

function getHello () {
  return 'hello';
}

function index (text) {
  var helloText = getHello();
  console.log('jquery.noop', jquery.noop);
  jquery.noop();
  return "".concat(helloText, " : ").concat(text);
}

export default index;

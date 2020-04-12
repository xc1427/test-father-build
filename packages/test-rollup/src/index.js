import getHello from './hello';
import jquery from 'jquery';

export default function(text) {
  const helloText = getHello();
  console.log('jquery.noop', jquery.noop);
  jquery.noop();
  return `${helloText} : ${text}`;
}
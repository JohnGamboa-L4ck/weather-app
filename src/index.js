import './style.css';
import Camel from './camel.jpg';
import printMe from './print';

console.log('ok');

const myIcon = new Image();
myIcon.src = Camel;

document.querySelector('body').appendChild(myIcon);

const btn = document.createElement('button');
btn.innerHTML = 'Click me and check the console!';
btn.onclick = printMe;
document.querySelector('body').appendChild(btn);

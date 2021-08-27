import './style.css';
import setup from './dom';
import events from './events';

setup();
events();

// run a function from event.js

// const preventKeydown = (e) => {
//     e.preventDefault();
// };

// window.addEventListener('keydown', preventKeydown);

// setTimeout(() => {
//     window.removeEventListener('keydown', preventKeydown);
// }, 3000);

import './style.css';
import setup from './dom';
import loadData from './api';

const test = () => {
    loadData('xyz')
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
};

// test();

setup();
// run a function from event.js

// const preventKeydown = (e) => {
//     e.preventDefault();
// };

// window.addEventListener('keydown', preventKeydown);

// setTimeout(() => {
//     window.removeEventListener('keydown', preventKeydown);
// }, 3000);

import './style.css';
import setup from './dom';
import { processInput, events } from './events';

const onload = async () => {
    try {
        setup();
        await processInput('Talavera, ph');
        events();
    } catch (error) {
        document.body.innerHTML = '<h1>Oops! Something went wrong.</h1>';
    }
};

onload();

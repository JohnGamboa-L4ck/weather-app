const setLanguage = () => document.querySelector('html').setAttribute('lang', 'en');

const setupHeadTag = () => {
    const headElement = document.querySelector('head');
    const titleElement = document.querySelector('title');

    const newMetaEdge = document.createElement('meta');
    const newLinkMaterialIcon = document.createElement('link');

    newMetaEdge.setAttribute('http-equiv', 'X-UA-Compatible');
    newMetaEdge.setAttribute('content', 'IE=edge');
    newLinkMaterialIcon.setAttribute('rel', 'stylesheet');
    newLinkMaterialIcon
        .setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

    headElement.insertBefore(newMetaEdge, titleElement);
    headElement.insertBefore(newLinkMaterialIcon, titleElement);
};

// input search
// practice async functions

function isDay() {
    const hours = (new Date()).getHours();
    return (hours >= 6 && hours < 18);
}

const setBackground = () => {
    if (!isDay()) {
        document.querySelector('body').classList.add('dark-mode');
    }
};

const createContainer = () => {
    const div = document.createElement('div');
    div.classList.add('container');
    document.querySelector('body').insertBefore(div, document.querySelector('body script'));
};

const createSearch = () => {
    const form = document.createElement('form');
    const div = document.createElement('div');
    const label = document.createElement('label');
    const search = document.createElement('input');
    const btn = document.createElement('button');

    form.setAttribute('novalidate', true);
    label.setAttribute('for', 'searchInput');
    search.setAttribute('type', 'search');
    search.setAttribute('id', 'searchInput');
    search.setAttribute('placeholder', 'Location');
    btn.setAttribute('type', 'submit');

    div.className = 'search-div';
    search.className = 'search-input';
    btn.className = 'search-btn';

    label.textContent = 'Search';
    btn.innerHTML = '<span class="material-icons-outlined va-mid">search</span>';

    div.appendChild(label);
    div.appendChild(search);
    div.appendChild(btn);
    form.appendChild(div);
    document.querySelector('.container').appendChild(form);
};

const createModalLoading = () => {
    const divContainer = document.createElement('div');
    const divLoader = document.createElement('div');

    divContainer.className = 'loading-container';
    divLoader.className = 'loader';

    divContainer.appendChild(divLoader);
    document.querySelector('.container').appendChild(divContainer);
};

const createMain = () => {
    const main = document.createElement('main');

    main.className = 'main';

    document.querySelector('.container').appendChild(main);
};

const createApp = () => {
    createContainer();
    createModalLoading();
    createSearch();
    createMain();
};

export default function setup() {
    setLanguage();
    setupHeadTag();
    setBackground();
    createApp();
}

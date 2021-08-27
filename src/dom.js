import Favicon from './favicon.png';

const setLanguage = () => document.querySelector('html').setAttribute('lang', 'en');

const setupHeadTag = () => {
    const headElement = document.querySelector('head');
    const titleElement = document.querySelector('title');

    const newMetaEdge = document.createElement('meta');
    const newLinkMaterialIcon = document.createElement('link');
    const newLinkFavicon = document.createElement('link');

    newMetaEdge.setAttribute('http-equiv', 'X-UA-Compatible');
    newMetaEdge.setAttribute('content', 'IE=edge');
    newLinkMaterialIcon.setAttribute('rel', 'stylesheet');
    newLinkMaterialIcon
        .setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');
    newLinkFavicon.setAttribute('rel', 'icon');
    newLinkFavicon.setAttribute('type', 'image/png');
    newLinkFavicon.setAttribute('href', Favicon);

    headElement.insertBefore(newMetaEdge, titleElement);
    headElement.insertBefore(newLinkMaterialIcon, titleElement);
    headElement.appendChild(newLinkFavicon);
};

const isDay = () => {
    const hours = (new Date()).getHours();
    return (hours >= 6 && hours < 18);
};

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

const createMain = () => {
    const main = document.createElement('main');

    main.className = 'main';

    document.querySelector('.container').appendChild(main);
};

const createModalContainer = () => {
    const divContainer = document.createElement('div');
    divContainer.className = 'modal';
    divContainer.setAttribute('id', 'modal');
    document.querySelector('.container').appendChild(divContainer);
};

const createModalLoading = () => {
    const divLoader = document.createElement('div');
    divLoader.className = 'loader';
    document.querySelector('.modal').appendChild(divLoader);
};

const createModalError = () => {
    const errorBox = document.createElement('div');
    const bigIcon = document.createElement('span');
    const errorBody = document.createElement('div');
    const label = document.createElement('label');
    const small = document.createElement('small');
    const closeBtn = document.createElement('button');

    errorBox.className = 'error-box';
    bigIcon.className = 'material-icons-outlined va-mid error-span';
    errorBody.className = 'error-body';
    closeBtn.className = 'close-error';

    small.setAttribute('id', 'errorMessage');
    closeBtn.setAttribute('id', 'closeError');

    bigIcon.innerText = 'error_outline';
    label.innerText = 'Error';
    closeBtn.innerHTML = 'CLOSE';

    errorBody.appendChild(label);
    errorBody.appendChild(small);
    errorBox.appendChild(bigIcon);
    errorBox.appendChild(errorBody);
    errorBox.appendChild(closeBtn);
    document.querySelector('.modal').appendChild(errorBox);
};

const createModals = () => {
    createModalContainer();
    createModalLoading();
    createModalError();
};

const createForecastTemplate = () => {
    const header = document.createElement('h1');
    const paraDescription = document.createElement('p');

    // temporary innerText data

    header.innerText = 'Cabanatuan City, PH';
    paraDescription.innerText = 'mostly cloudy';

    document.querySelector('main').appendChild(header);
    document.querySelector('main').appendChild(paraDescription);
};

const createApp = () => {
    createContainer();
    createSearch();
    createMain();
    createModals();
    createForecastTemplate();
};

const setup = () => {
    setLanguage();
    setupHeadTag();
    setBackground();
    createApp();
};

export default setup;

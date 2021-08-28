import loadData from './api';

const variable = (() => {
    let keyboardEventKey;
    let temp;
    let feels;
    let wind;

    return {
        keyboardEventKey,
        temp,
        feels,
        wind,
    };
})();

const preventKeydownExcept = (event) => {
    if (variable.keyboardEventKey !== event.key) {
        event.preventDefault();
    }
};

const addKeydownPreventionExcept = (key) => {
    variable.keyboardEventKey = key;
    window.addEventListener('keydown', preventKeydownExcept);
};

const removeKeydownPrevention = () => {
    window.removeEventListener('keydown', preventKeydownExcept);
};

const focusElement = (element) => {
    document.querySelector(element).focus();
};

const toggleLoading = () => {
    document.querySelector('#modal').classList.toggle('loading');
};

const toggleError = () => {
    document.querySelector('#modal').classList.toggle('alert');
    if (!document.querySelector('#modal').classList.contains('alert')) {
        removeKeydownPrevention();
        focusElement('#searchInput');
    } else {
        addKeydownPreventionExcept('Enter');
        focusElement('#closeError');
    }
};

const errorHandler = (error) => {
    toggleError();
    document.querySelector('#errorMessage').innerText = error;
};

const capitalizeFirstLetter = (string) => {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const celsiusToFahrenheit = (celsius) => {
    let num = celsius * 9;
    num /= 5;
    num += 32;
    return Math.round(num);
};

const meterPerSecondToMilesPerHour = (mps) => {
    const num = mps * 2.23694;
    return Math.round(num * 10) / 10;
};

const displayInCelsius = () => {
    document.querySelector('#temperature').innerText = variable.temp;
    document.querySelector('#infoFeels span').innerText = variable.feels;
    document.querySelector('#infoWind span').innerText = variable.wind;
};

const displayInFahrenheit = () => {
    document.querySelector('#temperature').innerText = celsiusToFahrenheit(variable.temp);
    document.querySelector('#infoFeels span').innerText = celsiusToFahrenheit(variable.feels);
    document.querySelector('#infoWind span').innerText = meterPerSecondToMilesPerHour(variable.wind);
};

const toggleUnit = () => {
    const temperature = document.querySelector('#temperature');

    if (temperature.classList.contains('deg-c')) {
        temperature.className = 'temperature deg-f';
        displayInFahrenheit();
    } else {
        temperature.className = 'temperature deg-c';
        displayInCelsius();
    }
};

const displayForecast = (data) => {
    const header = document.querySelector('#header');
    const description = document.querySelector('#description');
    const temperature = document.querySelector('#temperature');
    const infoFeels = document.querySelector('#infoFeels span');
    const infoWind = document.querySelector('#infoWind span');
    const infoHumid = document.querySelector('#infoHumid span');

    variable.temp = Math.round(data.main.temp);
    variable.feels = Math.round(data.main.feels_like);
    variable.wind = Math.round(data.wind.speed * 10) / 10;

    header.innerText = `${data.name}, ${data.sys.country}`;
    description.innerText = capitalizeFirstLetter(data.weather[0].description);
    temperature.innerText = variable.temp;
    infoFeels.innerText = variable.feels;
    infoWind.innerText = variable.wind;
    infoHumid.innerText = data.main.humidity;

    if (temperature.classList.contains('deg-f')) {
        displayInFahrenheit();
    }
};

const processInput = async (loc) => {
    try {
        toggleLoading();
        document.activeElement.blur();
        addKeydownPreventionExcept();
        const data = await loadData(loc);
        displayForecast(data);
        removeKeydownPrevention();
        document.querySelector('#searchInput').focus();
    } catch (error) {
        errorHandler(error.statusText);
    } finally {
        toggleLoading();
    }
};

const submitHandler = (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('#searchInput');

    if (!searchInput.value) {
        return errorHandler('Input field empty!');
    }

    if (typeof searchInput.value !== 'string') {
        return errorHandler('Input is not a string!');
    }

    if (searchInput.value.length <= 2) {
        return errorHandler('Input too short!');
    }

    if (searchInput.value.length > 20) {
        return errorHandler('Input too long!');
    }

    return processInput(searchInput.value);
};

const events = () => {
    document.querySelector('form').addEventListener('submit', submitHandler);
    document.querySelector('#closeError').addEventListener('click', toggleError);
    document.querySelector('#temperature').addEventListener('click', toggleUnit);
};

export { processInput, events };

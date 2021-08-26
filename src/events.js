const selector = (() => {
    const main = document.querySelector('main');
    return {
        main,
    };
})();

const resetMain = () => {
    selector.main.innerHTML = '';
};

const showError = () => {
    
};

const errorHandler = (error) => {
};

export default errorHandler;

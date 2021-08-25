const selector = (() => {
    const main = document.querySelector('main');
    return {
        main,
    };
})();

const errorHandler = (error) => {
    selector.main.innerHTML = error;
};

export default errorHandler;

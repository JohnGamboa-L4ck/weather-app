const loadData = async (loc = 'Cabanatuan') => {
    const key = 'eeec839a4d9973095fd520b438167720';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${key}&units=metric`;
    const response = await fetch(url, { mode: 'cors' });

    if (response.status === 200) {
        const data = await response.json();
        return data;
    }

    return Promise.reject(response);
};

export default loadData;

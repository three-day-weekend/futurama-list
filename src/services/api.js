const URL = 'http://futuramaapi.herokuapp.com/api/quotes';

const api = {
    getQuotes() {
        return fetch(`${URL}`)
            .then(response => response.json());
    }
};

export default api;
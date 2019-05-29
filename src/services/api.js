const URL = 'http://futuramaapi.herokuapp.com/api/quotes';

const api = {
    getQuotes(search) {
        const searchParams = new URLSearchParams();
        searchParams.set('search', search);
        const query = searchParams.toString();
        return fetch(`${URL}?${query}`)
            .then(response => response.json());
    }
};

export default api;
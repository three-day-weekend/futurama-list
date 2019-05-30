import Component from './Component.js';
import Header from './Header.js';
import List from './List.js';
import Loading from './Loading.js';

import api from '../services/api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const list = new List({ quotes: [] });
        const listDOM = list.render();

        const loading = new Loading({ done: true });
        const loadingDOM = loading.render();

        const main = dom.querySelector('main');

        dom.prepend(headerDOM);
        
        main.appendChild(listDOM);
        main.appendChild(loadingDOM);
        
        function loadQuotes() {
            loading.update({ done: false });

            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');

            api.getQuotes(search)
                .then(quotesData => {
                    list.update({ quotes: quotesData });
                })
                .finally(() => {
                    loading.update({ done: true });
                });
        }

        loadQuotes();

        window.addEventListener('hashchange', () => {
            loadQuotes();
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;
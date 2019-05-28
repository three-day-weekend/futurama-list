import Component from './Component.js';
import Header from './Header.js';
import List from './List.js';
import api from '../services/api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const list = new List({ quotes: [] });
        const listDOM = list.render();

        api.getQuotes()
            .then(quotesData => {
                list.update({ quotes: quotesData });
            });

        const main = dom.querySelector('main');

        dom.prepend(headerDOM);
        main.appendChild(listDOM);

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
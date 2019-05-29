import Component from './Component.js';

class Search extends Component {
    renderTemplate() {
        return /*html*/`
            <form>
                <input type="text">
                <button>Submit</button>
            </form>
        `;
    }
}

export default Search;
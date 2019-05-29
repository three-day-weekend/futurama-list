import Component from './Component.js';

class Search extends Component {
    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const searchParams = new URLSearchParams();
            searchParams.set('search', input.value);
            window.location.hash = searchParams.toString();
        });

        
        return form;
    }
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
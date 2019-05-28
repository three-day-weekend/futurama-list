import Component from './Component.js'; 
import CharacterItem from './CharacterItem.js';

class List extends Component {
    render() {
        const dom = this.renderDOM();

        const quotes = this.props.quotes;

        quotes.forEach(quote => {
            const characterItem = new CharacterItem({ character: quote });
            const characterItemDOM = characterItem.render();
            dom.appendChild(characterItemDOM);
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <ul></ul>
        `;
    }
}

export default List;
import Component from './Component.js'; 
import QuoteItem from './QuoteItem.js';

class List extends Component {
    render() {
        const dom = this.renderDOM();

        const quotes = this.props.quotes;

        quotes.forEach(quote => {
            const quoteItem = new QuoteItem({ quote });
            const quoteItemDOM = quoteItem.render();
            dom.appendChild(quoteItemDOM);
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
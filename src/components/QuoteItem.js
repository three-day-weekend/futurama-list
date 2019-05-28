import Component from './Component.js';

class QuoteItem extends Component {
    renderTemplate() {
        const quote = this.props.quote;
        return /*html*/ `
            <li>
                <h2>${quote.character}</h2>
                <section>
                    <img src="${quote.image}" alt="${quote.character}">
                    <blockquote>${quote.quote}</blockquote>
                </section>
            </li>
        `;
    }
}

export default QuoteItem;
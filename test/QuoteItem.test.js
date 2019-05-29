import QuoteItem from '../src/components/QuoteItem.js';

const test = QUnit.test;

QUnit.module('QuoteItem');

test('make Quote Item from template', assert => {
    const quote = {
        character: 'Bender',
        quote: 'Bite my shiny metal ass.',
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
    };
    const quoteItem = new QuoteItem({ quote });
    const quoteItemDOM = quoteItem.renderTemplate();
    assert.htmlEqual(quoteItemDOM, /*html*/ `
        <li>
            <h2>Bender</h2>
            <section>
                <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="Bender">
                <blockquote>Bite my shiny metal ass.</blockquote>
            </section>
        </li>
    `);
});
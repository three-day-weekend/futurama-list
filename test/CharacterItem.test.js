import CharacterItem from '../src/components/CharacterItem.js';

const test = QUnit.test;

QUnit.module('CharacterItem');

test('make Character Item from template', assert => {
    const character = {
        character: 'Bender',
        quote: 'Bite my shiny metal ass.',
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
    };
    const characterItem = new CharacterItem({ character });
    const characterItemDOM = characterItem.renderTemplate();
    assert.htmlEqual(characterItemDOM, /*html*/ `
        <li>
            <h2>Bender</h2>
            <section>
                <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="Bender">
                <blockquote>Bite my shiny metal ass.</blockquote>
            </section>
        </li>
    `);
});
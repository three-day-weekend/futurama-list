import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        return /*html*/ `
            <li>
                <h2>${character.character}</h2>
                <section>
                    <img src="${character.image}" alt="${character.character}">
                    <blockquote>${character.quote}</blockquote>
                </section>
            </li>
        `;
    }
}

export default CharacterItem;
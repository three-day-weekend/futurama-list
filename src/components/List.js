import Component from './Component.js';

class List extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul>
                <li>
                    <h2>Bender</h2>
                    <section>
                        <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="Bender">
                        <blockquote>Bite my shiny metal ass.</blockquote>
                    </section>
                </li>
                <li>
                    <h2>Leela</h2>
                    <section>
                        <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/leela.png" alt="Leela">
                        <blockquote>...at least here you'll be treated with dignity. Now strip naked and get on\nthe probulator.</blockquote>
                    </section>    
                </li>
                <li>
                    <h2>Fry</h2>
                    <section>
                        <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png" alt="Fry">
                        <blockquote>...it's what seperates humans and robots from animals and animal robots.</blockquote>
                    </section>
                </li>
            </ul>
        `;
    }
}

export default List;
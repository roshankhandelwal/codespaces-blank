const template = document.createElement('template');
template.innerHTML = `
    <header>
        <slot name="header" />
    </header>
    <section>
        <slot name="content" />
    </section>
    <footer>
        <slot name="footer" />
    </footer>
`;

export class CardComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("in-card", CardComponent);
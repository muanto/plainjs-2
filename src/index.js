import logo from './logo'
import styleSheet from './style.css'
import getRandomColor from './getRandomColor';
const template = document.createElement("template");

template.innerHTML = /*html*/`
  ${logo}
  <button id="btn">Change color</button>
 `;

class BuzzLogo extends HTMLElement {
  constructor() {
    super();
    
    this.color = 'lightgray';
    this.attachShadow({ mode: "open" });

    this.shadowRoot.adoptedStyleSheets = [styleSheet];
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("btn").onclick = () => this.changeColor();
    this.update(this.count);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
  }

  changeColor() {
    this.color = getRandomColor();
    this.update()
  }



  update(count) {
    this.shadowRoot.getElementById("logo").style.fill = this.color;
  }
}

customElements.define("buzz-logo", BuzzLogo);

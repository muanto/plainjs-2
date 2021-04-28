import logo from './logo'

import style from './style';
import getRandomColor from './getRandomColor';

const template = document.createElement("template");

template.innerHTML = /*html*/`
  ${logo}
  <button id="btn">Change color</button>
 `;
 
const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(style);

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
    this.update();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
  }

  changeColor() {
    this.color = getRandomColor();
    this.update()
  }

  update() {
    this.shadowRoot.getElementById("logo").classList.add('rotate');
    this.shadowRoot.getElementById("logo").style.fill = this.color;
    setTimeout(()=>{
      this.shadowRoot.getElementById("logo").classList.remove('rotate');
    },600) 
  }
}

customElements.define("buzz-logo", BuzzLogo);

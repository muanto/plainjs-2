import logo from './logo.js';
import style from './style.js';
import getRandomColor from './getRandomColor.js';
const template = document.createElement("template");
template.innerHTML =
/*html*/
`
  ${logo}
  <button id="btn">Change color</button>
 `;
const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(style);

class BuzzLogo extends HTMLElement {
  constructor() {
    super();

    this.changeColor = () => {
      this.color = getRandomColor();
      this.rotateAndUpdate();
      this.dispatchEvent(new CustomEvent('colorChanged', {
        detail: this.color
      }));
    };

    this.color = 'lightgray';
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.adoptedStyleSheets = [styleSheet];
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("btn").onclick = this.changeColor;
    this.update();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
  }

  rotateAndUpdate() {
    this.shadowRoot.getElementById("logo").classList.add('rotate');
    setTimeout(() => {
      this.shadowRoot.getElementById("logo").classList.remove('rotate');
      this.update();
    }, 300);
  }

  update() {
    this.shadowRoot.getElementById("logo").style.fill = this.color;
  }

}

customElements.define("buzz-logo", BuzzLogo);
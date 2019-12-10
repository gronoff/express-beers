import { LitElement, html } from '../web_modules/lit-element.js';

import bootstrapStyle from '../web_modules/@granite-elements/granite-lit-bootstrap.js';

class BeerDetails extends LitElement {


  constructor() {
    super();
    this.beer = {};
  }

  static get properties() {
    return { 
      location: {
        type: Object
      },
      beer: {
        type: Object 
      }
    };
  }

  static get styles() {
    return bootstrapStyle;
  }

  render() {
    return html`
      <div id='details'>
        I am the beer
        <p>${this.beer.name}</p>
        <p>${this.beer.description}</p>
      </div>
    `;
  }


  async _getData() {
    try {
      const response = await fetch(`/beer/${this.location.params.id}`);
      this.beer = await response.json();
      console.log(this.beer)
    } catch (err) {
      console.log("fetch failed", err);
    }
  }


  firstUpdated(){
    this._getData();
  }

}

customElements.define('beer-details', BeerDetails);
import { LitElement, html } from '../web_modules/lit-element.js';

import bootstrapStyle from '../web_modules/@granite-elements/granite-lit-bootstrap.js';

class BeerDetails extends LitElement {


  constructor() {
    super();
    this.beers = {};
  }

  static get properties() {
    return { 
      location: {
        type: Object
      },
      beers: {
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
        <p>${this.beers.name}</p>
      </div>
    `;
  }


  async _getData() {
    try {
      const response = await fetch(`/beer/${this.location.params.id}`);
      this.beers = await response.json();
      console.log(this.beers)
    } catch (err) {
      console.log("fetch failed", err);
    }
  }


  firstUpdated(){
    this._getData();
  }

}

customElements.define('beer-details', BeerDetails);
import { LitElement, html } from "lit";
import { pokeTypeColor } from "../app-utils";
import style from "./poke-card-styles.js";

class PokeCard extends LitElement {
  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      variant: { type: String },
      name: { type: String },
      type: { type: String },
      image: { type: String },
      evolutions: { type: Array },
    };
  }

  constructor() {
    super();
    this.variant = "shadow";
    this.name = "Pikachu";
    this.type = "Type";
    this.image = "Prev.svg";
  }

  render() {
    return html`
      <div class="poke-card">
        <div class="poke-name">${this.name}</div>
        <div class="poke-image">
          <img src="./assets/img/pokemon-img/${this.image}" />
        </div>
        <div
          class="poke-type"
          style="background-color: ${pokeTypeColor[this.type]};"
        >
          ${this.type}
        </div>
      </div>
    `;
  }
}

customElements.define("poke-card", PokeCard);

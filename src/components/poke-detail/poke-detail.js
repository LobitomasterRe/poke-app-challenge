import { LitElement, html } from "lit";
import baseStyle from "../shared-styles/shared-styles.js";
import style from "./poke-detail-styles.js";

import "../poke-card/poke-card.js";
import "../poke-list/poke-list.js";
import { pokeTypeColor } from "../app-utils";

class PokeDetail extends LitElement {
  static get styles() {
    return [baseStyle, style];
  }

  static get properties() {
    return {
      data: { type: Object },
    };
  }

  constructor() {
    super();
    this.data = {
      name: "",
      type: "",
      image: "",
      evolutions: [],
    };
  }

  /**
   * Fires a customEvent
   * @param { String } eventName name of the event
   * @param { Object } eventDetail detail of the event
   */
  _customDispatch(eventName, eventDetail) {
    let event = new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      detail: eventDetail,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div
        class="head-detail"
        style="background-color: ${pokeTypeColor[this.data.type]};"
      >
        <div class="head-button">
          <button
            type="button"
            class="btn btn-secondary"
            @click="${() => this._customDispatch("go-back-detail")}"
          >
            🡰
          </button>
        </div>
        <div class="head-card">
          <poke-card
            name="${this.data.name}"
            type="${this.data.type}"
            image="${this.data.image}"
          ></poke-card>
        </div>
      </div>
      <div class="body-detail">
        <div class="body-title">
          <h3>Evoluciones</h3>
        </div>
        <poke-list
          evolutions="${JSON.stringify(this.data.evolutions)}"
        ></poke-list>
      </div>
    `;
  }
}

customElements.define("poke-detail", PokeDetail);

import { LitElement, html } from "lit";
import baseStyle from "../shared-styles/shared-styles.js";
import style from "./poke-list-styles.js";

import { pokeTypeColor } from "../app-utils";

class PokeList extends LitElement {
  static get styles() {
    return [baseStyle, style];
  }

  static get properties() {
    return {
      evolutions: { type: Array },
    };
  }

  constructor() {
    super();
    this.evolutions = [];
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
      <div class="container-list-evolutions">
        ${this.evolutions.length
          ? this.evolutions.map(
              (evolution, i) => html`
                <div class="poke-list-wrapper">
                  <div class="poke-list-item">
                    <img src="./assets/img/pokemon-img/${evolution.image}" />
                    <div class="description-list-item">
                      <span class="field-text">Nombre:</span>
                      <span class="data-text">${evolution.name}</span>
                      <br />
                      <span class="field-text">Tipo:</span>
                      <div
                        class="poke-type"
                        style="background-color: ${pokeTypeColor[
                          evolution.type
                        ]};"
                      >
                        ${evolution.type}
                      </div>
                    </div>
                    <div class="edit-container">
                      <button
                        type="button"
                        class="btn btn-success"
                        @click="${() =>
                          this._customDispatch("data-edit-pokemon", {
                            index: i,
                            evolution,
                          })}"
                      >
                        Editar
                      </button>
                    </div>
                  </div>

                  ${i < this.evolutions.length - 1
                    ? html`<div class="arrow-between">➤</div>`
                    : ""}
                </div>
              `
            )
          : html`
              <span class="empty-message">El pokemon no tiene evoluciones</span>
            `}
      </div>
    `;
  }
}

customElements.define("poke-list", PokeList);

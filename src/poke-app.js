import { LitElement, html } from "lit";
import baseStyle from "./components/shared-styles/shared-styles.js";
import style from "./poke-app-styles.js";

// UI Components
import "./components/poke-card/poke-card.js";
import "./components/poke-detail/poke-detail.js";

// DM Components
import "./components/poke-data-service/PokeDataServiceComponent.js";

class PokeApp extends LitElement {
  static get styles() {
    return [baseStyle, style];
  }

  static get properties() {
    return {
      /**
       * Represents the app state
       * @type { String }
       */
      appState: { type: String },
      /**
       * Represents the detail view state
       * @type { Boolean }
       */
      detailState: { type: Boolean },
      /**
       * List of pokémons
       * @type { Array }
       */
      pokemonList: { type: Array },
      /**
       * Pokemon selected
       * @type { Object }
       */
      pokemonSelected: { type: Object },
      /**
       * State of modal edit
       * @type { Boolean }
       */
      editModalShow: { type: Boolean },
      /**
       * State of info modal
       * @type { Boolean }
       */
      infoModalShow: { type: Boolean },
      /**
       * Edit field name
       * @type { String }
       */
      editName: { type: String },
      /**
       * Edit field type
       * @type { String }
       */
      editType: { type: String },
      /**
       * Edit field index
       * @type { Number }
       */
      editIndex: { type: Number },
    };
  }

  constructor() {
    super();
    this.appState = "home";
    this.detailState = false;
    this.pokemonSelected = JSON.stringify({
      name: "",
      type: "",
      image: "Prev.svg",
      evolutions: [],
    });
    this.pokemonList = [];
    this.infoModalShow = false;

    this.addEventListener("data-edit-pokemon", this._loadDataEdit);
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

  /**
   * Change the app state view
   * @param { String } state name of the state
   */
  _changeAppState(state) {
    this.appState = state;
    this.detailState = false;
    this.editModalShow = false;
    this.infoModalShow = false;
    if (state === "pokemons" && this.pokemonList.length < 1) {
      this._customDispatch("call-pokemon-service");
    }
  }

  /**
   * Fill pokemon data in pokemonList
   * @param { Object } pokemon pokemon element
   */
  async _fillPokemonList(pokemon) {
    const hasEvolutions = pokemon.evolutions !== undefined;
    if (hasEvolutions) {
      this.pokemonList.push(pokemon);
    } else {
      pokemon.evolutions = [];
      this.pokemonList.push(pokemon);
    }
    if (pokemon.evolutions.length > 0) {
      for (let j = 0; j < pokemon.evolutions.length; j++) {
        this._fillPokemonList(pokemon.evolutions[j]);
      }
    }
  }

  /**
   * Receive the API data and call another function to fill it
   * @param { Array } detail API response data
   */
  async _loadPokemonList({ detail }) {
    for (let i = 0; i < detail.length; i++) {
      await this._fillPokemonList(detail[i]);
    }
    this.requestUpdate();
  }

  /**
   * Set selected Pokemon
   * @param { Object } pokemon pokemon data
   */
  _selectPokemon(pokemon) {
    this.detailState = true;
    this.pokemonSelected = JSON.stringify(pokemon);
  }

  /**
   * Close Detail and go back Pokemon list
   */
  _backPokemonList() {
    this.detailState = false;
  }

  /**
   * Load data from component and set it in form
   * @param { Object } detail pokemon data
   */
  _loadDataEdit({ detail }) {
    const { index, evolution } = detail;
    this.editIndex = index;
    this.editName = evolution.name;
    this.editType = evolution.type;
    this.editModalShow = true;

    this.shadowRoot.querySelector("#poke-name-field").value = evolution.name;
    this.shadowRoot.querySelector("#poke-type-field").value = evolution.type;
  }

  /**
   * Update the state to editing name
   * @param { Event } e event data
   */
  _onInputName(e) {
    this.editName = e.currentTarget.value;
  }

  /**
   * Update the state to editing type
   * @param { Event } e event data
   */
  _onInputType(e) {
    this.editType = e.currentTarget.value;
  }

  /**
   * Close modal edit and clean form
   */
  _closeModal() {
    this.editModalShow = false;
    this.infoModalShow = false;
    this.shadowRoot.querySelector("#poke-name-field").value = "";
    this.shadowRoot.querySelector("#poke-type-field").value = "";
  }

  /**
   * Close informational modal
   */
  _closeInfoModal() {
    this.infoModalShow = false;
  }

  /**
   * Show informational modal when checkbox is selected
   * @param {Event} e event data
   */
  _onRepeatCheck(e) {
    if (e.currentTarget.checked) {
      this.infoModalShow = true;
    }
  }

  /**
   * Save Editing data and close edit modal
   */
  _savePokeData() {
    let newData = JSON.parse(this.pokemonSelected);
    const newItem = {
      name: this.editName,
      type: this.editType,
      image: newData.evolutions[this.editIndex].image,
    };
    newData.evolutions.splice(this.editIndex, 1, newItem);
    this.pokemonSelected = JSON.stringify(newData);
    this._closeModal();
  }

  get homeTemplate() {
    return html`
      <section class="home-hero">
        <div class="home-content">
          <div class="home-text">
            <h1 class="home-title">
              ¡Bienvenido a <span class="highlight">Poke App</span>!
            </h1>
            <p class="home-description">
              Explora información de tus Pokémon favoritos, conoce su tipo y su
              línea evolutiva.
            </p>
            <button
              class="btn-primary"
              @click="${() => this._changeAppState("pokemons")}"
            >
              Ver Pokémons
            </button>
          </div>
          <div class="home-image-container">
            <img
              class="home-image"
              src="./assets/img/pokeapp-home.png"
              alt="Poke App portada"
            />
          </div>
        </div>
      </section>
    `;
  }

  get pokemonTemplate() {
    return html`
      ${!this.detailState ? this.listTemplate : this.detailTemplate}
    `;
  }

  get modalEditTemplate() {
    return html`
      <div class="modal-back${this.editModalShow ? " show" : " hide"}">
        <div class="modal-content">
          <div class="modal-head">
            <span>Editar datos</span>
          </div>
          <div class="modal-body">
            <label for="poke-name-field">Nombre:</label>
            <input
              id="poke-name-field"
              type="text"
              class="form-imput"
              @input=${this._onInputName}
            />
            <br />
            <label for="poke-type-field">Tipo:</label>
            <input
              id="poke-type-field"
              type="text"
              class="form-imput"
              @input=${this._onInputType}
            />
            <br />
            <label>
              <input
                id="repeat-check"
                type="checkbox"
                @change=${this._onRepeatCheck}
              />
              ¿Pokémon repetido?
            </label>
            <br />
            <span class="red-message"
              >* El cambio que se aplica es en memoria</span
            >
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="${this._closeModal}"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-success"
              @click="${this._savePokeData}"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    `;
  }

  get modalInfoTemplate() {
    return html`
      <div class="modal-back${this.infoModalShow ? " show" : " hide"}">
        <div class="modal-content">
          <div class="modal-head">
            <span>Información</span>
          </div>
          <div class="modal-body">
            <p>Cambiará el Pokémon por el más cercano disponible.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="${this._closeInfoModal}"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    `;
  }

  get listTemplate() {
    return html`
      <div class="container poke-list">
        ${this.pokemonList.map(
          (pokemon, i) => html`
            <poke-card
              variant="shadow"
              name="${pokemon.name}"
              type="${pokemon.type}"
              image="${pokemon.image}"
              @click="${() => this._selectPokemon(pokemon)}"
            ></poke-card>
          `
        )}
      </div>
    `;
  }

  get detailTemplate() {
    return html`
      <div class="container detail-container">
        <poke-detail
          data="${this.pokemonSelected}"
          @go-back-detail="${() => this._backPokemonList()}"
        ></poke-detail>
        ${this.modalEditTemplate} ${this.modalInfoTemplate}
      </div>
    `;
  }

  render() {
    return html`
      <header>
        <nav class="nav-app">
          <div class="brand">
            <img class="image-brand" src="./assets/img/pokeapp-logo.png" />
          </div>
          <div class="menu-app">
            <button
              type="button"
              class="menu-item btn${this.appState === "home" ? " active" : ""}"
              @click="${() => this._changeAppState("home")}"
            >
              Inicio
            </button>
            <button
              type="button"
              class="menu-item btn${this.appState === "pokemons"
                ? " active"
                : ""}"
              @click="${() => this._changeAppState("pokemons")}"
            >
              Pokémons
            </button>
          </div>
        </nav>
      </header>
      <main>
        ${this.appState === "home" ? this.homeTemplate : this.pokemonTemplate}
      </main>
      <div>
        <poke-data-service
          host="http://localhost:3002"
          @poke-data-get-service-success="${this._loadPokemonList}"
        ></poke-data-service>
      </div>
    `;
  }
}

customElements.define("poke-app", PokeApp);

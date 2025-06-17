import { LitElement, html } from 'lit';
import { apiCatalog } from '../app-utils';
import { BaseApiRequest } from '../app-utils';

const pokeApi = apiCatalog.pokeApi;

export class PokeDataServiceComponent extends LitElement {

  static get properties() {
    return {
      host: { type: String },
      params: { type: Object }
    };
  }

  constructor() {
    super();
    this.baseApiRequest = new BaseApiRequest();
    document.addEventListener('call-pokemon-service', ({detail}) => this._prepareCallService(detail));
  }

  _prepareCallService(detail) {
    const params = detail !== null ? detail : {};
    this.getPokemonList(params);
  }

  /**
   * Call pokemon list service
   * @param { Object } params
   * @event 'poke-data-get-service-success'
   * @event 'poke-data-get-service-error'
   */
  async getPokemonList(params = {}) {
    await this.baseApiRequest.get(`${this.host}/${pokeApi}`, params)
    .then((data) => {
      this._onRequestSuccess(data);
    })
    .catch((err) => {
      this._onError(err);
    });
  }

  /**
   * control for success in response service
   * @param {Object} data: pokemon data returned
   */
  _onRequestSuccess(data) {
    this._dispatchEvent('success', data);
  }

  /**
   * control for error in response service
   * @param {Object} error: error data returned
   */
  _onError(error) {
    this._dispatchEvent('error', error);
  }

  /**
   * dispatch custom event
   * @param {String} eventName: event name to dispatch
   * @param {Object} detail: event data to dispatch
   * @param {Boolean} bubbles: event propagation
   */
  _dispatchEvent(eventName, detail = {}) {
    this.dispatchEvent(
      new CustomEvent(
        `poke-data-get-service-${eventName}`,
        {
          composed: true,
          bubbles: true,
          detail,
        }
      ),
    );
  }

  render() {
    return html``;
  }

}

customElements.define('poke-data-service', PokeDataServiceComponent);
import { css } from "lit";
export default css`
  :host {
    max-width: 140px;
    border-radius: 8px;
    padding: 10px 30px;
    background-color: #ffffff;
  }

  :host([variant="shadow"]) {
    cursor: pointer;
    box-shadow: 2px 2px 6px 1px #cacaca;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    transform-style: preserve-3d;
  }

  :host([variant="shadow"]:hover) {
    background-color: #ddf2ff;
    transform: translateY(-8px) rotateX(5deg);
    box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.3);
  }

  :host([variant="shadow"]:active) {
    transform: translateY(-2px);
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  }

  .poke-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .poke-image {
    margin-top: auto;
  }
  .poke-image > img {
    max-width: 85px;
    max-height: 85px;
  }
  .poke-name {
    font-size: 1rem;
  }
  .poke-type {
    margin-top: 3px;
    max-width: fit-content;
    padding: 2px 7px 4px 7px;
    border-radius: 10px;
    font-size: 0.8rem;
  }
`;

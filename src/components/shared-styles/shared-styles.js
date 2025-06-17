import { css } from "lit";
export default css`
  * {
    font-family: "Muli", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  }
  .container {
    max-width: 960px;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
    background-color: #eaeaea;
    position: relative;
  }
  .row {
    margin-top: 15px;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
  .col {
    flex: 1 0 0%;
  }
  .btn {
    padding: 7px 12px;
    border-radius: 7px;
    border-color: #a3a3a3;
    border-style: solid;
    border-width: 2px;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
  }
  .btn-primary {
    border-color: #585858;
    background-color: #000000;
    color: #ffffff;
  }
  .btn-secondary {
    border-color: #c8c8c8;
    background-color: #929292;
    color: #ffffff;
  }
  .btn-success {
    border-color: #375fff;
    background-color: #0014cb;
    color: #ffffff;
  }
  .form-imput {
    margin-top: 5px;
    border: 2px solid #bcbcbc;
    padding: 5px;
    font-size: 1rem;
    border-radius: 5px;
  }
  .form-imput:focus-visible {
    outline: 2px solid #a8a8a8;
  }
`;

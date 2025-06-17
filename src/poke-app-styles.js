import { css } from "lit";
export default css`
  :host {
    display: contents;
    min-height: 100%;
  }
  header {
    position: relative;
    z-index: 1;
  }
  main {
    min-height: 100%;
  }
  .nav-app {
    background-color: #d00000;
    max-height: 60px;
    padding: 5px;
    display: flex;
    box-shadow: 0px 5px 5px 0px #c9c9c9;
    position: relative;
    flex-wrap: wrap;
  }
  .image-brand {
    width: 150px;
  }
  .image-home {
    width: 400px;
  }
  .menu-app {
    align-content: center;
    margin-left: auto;
    margin-right: 20px;
  }
  .menu-item {
    border: none;
    color: #ffffff;
    font-size: 1.5rem;
  }
  .menu-item:hover {
    color: #000000;
    text-decoration: underline;
  }
  .menu-item.active {
    color: #000000;
  }
  .poke-list {
    max-width: 650px;
    display: grid;
    gap: 10px;
    grid-template-columns: auto auto auto;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .detail-container {
    min-height: calc(100vh - 69.5px);
  }

  .modal-back {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    background-color: #000000ad;
  }
  .modal-content {
    font-size: 1rem;
    border-radius: 10px;
    margin: auto;
    background-color: #ffffff;
  }

  .modal-head,
  .modal-body,
  .modal-footer {
    padding: 15px;
  }

  .modal-head {
    border-bottom: 1px solid #c8c8c8;
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    min-width: 250px;
  }
  .modal-footer {
    border-top: 1px solid #c8c8c8;
    display: flex;
  }
  .modal-footer > .btn-secondary {
    margin-left: auto;
    margin-right: 10px;
  }
  .modal-body input[type="checkbox"] {
    margin-right: 5px;
  }
  .show {
    display: flex;
  }
  .hide {
    display: none;
  }
  .red-message {
    color: red;
  }

  .home-hero {
    padding: 60px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
  }

  .home-text {
    flex: 1;
    min-width: 300px;
  }

  .home-title {
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 20px;
    color: #1e2a37;
  }

  .highlight {
    color: #ff5d5d;
  }

  .home-description {
    font-size: 1.2rem;
    color: #4a4a4a;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .btn-primary {
    background-color: #ff5d5d;
    color: #ffffff;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: background 0.3s ease;
  }

  .btn-primary:hover {
    background-color: #e14646;
  }

  .home-image-container {
    flex: 1;
    min-width: 300px;
    display: flex;
    justify-content: center;
  }

  .home-image {
    width: 100%;
    max-width: 400px;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    .nav-app {
      flex-direction: column;
      align-items: flex-start;
    }
    .menu-item {
      font-size: 1.2rem;
    }
    .image-home {
      width: 100%;
    }
    .poke-list {
      grid-template-columns: auto auto;
    }
  }
`;

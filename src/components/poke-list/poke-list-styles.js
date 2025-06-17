import { css } from "lit";
export default css`
  .poke-list-item {
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    background-color: #f1f7ff;
    padding: 20px;
    margin-bottom: 10px;
  }
  .poke-list-item > img {
    max-width: 150px;
    max-height: 150px;
  }
  .description-list-item {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
  }
  .field-text {
    font-size: 1rem;
    color: #909090;
  }
  .data-text {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }
  .empty-message {
    color: #3e3e3e;
    font-style: italic;
  }
  .edit-container {
    margin-left: auto;
  }
  .type-color {
    margin-right: 10px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  .container-list-evolutions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 10px;
  }

  .poke-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    background: #f4f4f4;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    transition: transform 0.2s ease-in-out;
  }

  .poke-list-item:hover {
    transform: translateY(-4px);
  }

  .poke-list-item > img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 50%;
    background-color: white;
    padding: 4px;
    border: 2px solid #ccc;
  }

  .description-list-item {
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .field-text {
    font-size: 0.9rem;
    color: #666;
  }

  .data-text {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }

  .type-color {
    margin-right: 8px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 1px solid #aaa;
  }

  .edit-container {
    margin-left: auto;
  }

  .btn {
    background-color: #28a745;
    color: white;
    font-weight: bold;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #218838;
  }

  .poke-type {
    margin-top: 3px;
    max-width: fit-content;
    padding: 2px 7px 4px 7px;
    border-radius: 10px;
    font-size: 0.8rem;
  }

  .container-list-evolutions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .poke-list-wrapper {
    display: flex;
    align-items: center;
  }

  .arrow-between {
    font-size: 2rem;
    margin: 0 10px;
    color: #999;
  }

  .poke-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    background: #f4f4f4;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    width: 280px;
    transition: transform 0.2s ease-in-out;
  }

  .poke-type {
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.9rem;
    color: white;
    font-weight: bold;
    display: inline-block;
    margin-top: 4px;
  }

  @media (max-width: 600px) {
    .container-list-evolutions {
      flex-direction: column;
    }

    .poke-list-wrapper {
      flex-direction: column;
    }

    .arrow-between {
      transform: rotate(90deg);
      margin: 10px 0;
    }
  }
`;

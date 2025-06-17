import { css } from "lit";
export default css`
  .head-detail {
    padding: 15px;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    color: #000000;
    text-shadow: 1px 1px 0 #ffffff;
  }
  .head-card,
  .body-title {
    display: flex;
    justify-content: center;
  }

  .body-detail {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 15px;
    padding: 15px;
  }
`;


import styled from "styled-components";

export default styled.div`

  &:not(.is--visible) {
    display: none;
  }

  .ch-check-steps-overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 1);
    z-index: 200;
  }

  .ch-check-steps-wrapper {
    width: 90vw;
    height: 50vh;
    max-height: 250px;
    box-sizing: border-box;
    padding: 10px;
    background: #ffffff;
    border-radius: 5px;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1280px;
    z-index: 201;
    @media only screen and (min-width: 601px) {
      max-width: 400px;
    }
  }
  .ch-check-steps-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    svg {
      width: 150px;
      height: 150px;
      
      g {
        fill: #ffe100;
      }
    }

    .ch-check-steps-text {
      font-family: "Montserrat",sans-serif;
      font-size: 16px;
      font-weight: normal;
      text-align: center;
      line-height: 20px;
      
      &--wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: 20px;
      }
    }

    .ch-check-steps-options {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 10px;

      a {
        border-radius: 5px;
        color: #ffffff;
        padding: 5px 10px;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 900;
        text-align: center;
        line-height: 18px;
        text-transform: uppercase;
        cursor: pointer;
      }

      .ch-restart {
        background: #00ff44;
      }
      .ch-get-back {
        background: #ff8800;
        margin-left: 10px;
      }
    }
  }
`;
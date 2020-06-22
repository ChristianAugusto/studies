
import styled from "styled-components";

export default styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .ch-tutorial {
    &-title {
      font-family: "Montserrat", sans-serif;
      font-size: 19px;
      font-weight: 900;
      text-align: center;
      line-height: 25px;

      @media only screen and (min-width: 1100px) {
        font-size: 22px;
      }

      @media only screen and (min-width: 601px) {
        font-size: 25px;
      }

      &--wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    &-text {
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
      font-weight: normal;
      text-align: center;
      line-height: 20px;

      @media only screen and (min-width: 601px) {
        font-size: 19px;
      }

      &--wrapper {
        margin-top: 10px;
      }
    }
  }

  .ch-dog-name {
    width: 240px;
    height: 30px;
    border: 1px solid #00b7ff;
    padding: 0 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    font-weight: normal;
    color: #000000;

    @media only screen and (min-width: 601px) {
      font-size: 15px;
      min-height: 35px;
    }

    &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color: #a3a3a3;
    }

    &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: #a3a3a3;
    }

    &::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: #a3a3a3;
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #a3a3a3;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: #a3a3a3;
    }

    &:focus {
      outline: none;
      outline-color: transparent;
    }

    &--wrapper {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
    }
  }
`;
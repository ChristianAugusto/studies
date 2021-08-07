
import styled from "styled-components";

export default styled.main`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .ch-tutorial-title {
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


    &-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;;
      align-items: center;
    }
  }

  .ch-tutorial-text {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    line-height: 20px;
    
    @media only screen and (min-width: 601px) {
      font-size: 19px;
    }

    &-wrapper {
      margin-top: 10px;
    }
  }
`;
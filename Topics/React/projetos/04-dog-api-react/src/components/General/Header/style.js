
import styled from "styled-components";

export default styled.header`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  .ch-logotype {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      width: 65px;
      height: 65px;
    }

    h6 {
      font-family: "Montserrat", sans-serif;
      font-size: 17px;
      font-weight: 900;
      text-align: center;
      line-height: 20px;
    }

    @media only screen and (min-width: 601px) {
      svg {
        width: 80px;
        height: 80px;
      }
      h6 {
        font-size: 20px;
      }
    }
    @media only screen and (min-width: 1100px) {
      svg {
        width: 100px;
        height: 100px;
      }
      h6 {
        font-size: 24px;
      }
    }
  }
`;
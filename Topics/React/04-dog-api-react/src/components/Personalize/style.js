
import styled from "styled-components";

export default styled.main`
  width: 100%;
  box-sizing: border-box;
  @media only screen and (min-width: 1100px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .ch-personalize-article {
    width: 100%;
    box-sizing: border-box;

    @media only screen and (min-width: 1100px) {
      width: 50%;
    }
  }
`;
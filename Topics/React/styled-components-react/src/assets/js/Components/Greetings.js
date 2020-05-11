
import React from "react";
import styled from "styled-components";

/*

const css = {
  color: "#fffaaa",
  margin: "10px 15px"
};

export default props => {
  return (
    <h1 style={css}>
      Hello World - <span>By React</span>
    </h1>
  );
};

*/

const Title = styled.h1`
  color: #f00;
  font-size: ${props => `${props.fontSize}px`};

  span {
    font-size: 12px;
  }
`;

export default props => <Title fontSize={20}>Hello World - <span>by React</span></Title>;
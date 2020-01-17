
import React from "react";
import styled from "styled-components";

import headerStyle from "./headerStyle";

const Header = styled.header`${headerStyle}`;

export default props => (
  <Header>
    <div className="store-name-wrapper">
      <h6 className="store-name-text">JSHunt</h6>
    </div>
  </Header>
);
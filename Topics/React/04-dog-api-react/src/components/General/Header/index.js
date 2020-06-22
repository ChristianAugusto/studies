
import React from "react";
import { Link } from "react-router-dom";

import Header from "./style.js";

import { ReactComponent as Logotype } from "../../../svgs/logotype.svg";

export default props => (
  <Header>
    <Link to="/">
      <div className="ch-logotype">
        <Logotype />
        <h6>Your Dog Hear</h6>
      </div>
    </Link>
  </Header>
);
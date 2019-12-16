
import React from "react";
import ReactDOM from "react-dom";

import Pessoa from "./pessoa";

// import "./assets/scss/style.scss";

const atendente = new Pessoa();

console.log(atendente.cumprimentar());

const x = (message = "x") => {
  console.log(`Diga ${message}`);
};

x();


ReactDOM.render(<h1>Hello World - by React</h1>, document.getElementById("app"));
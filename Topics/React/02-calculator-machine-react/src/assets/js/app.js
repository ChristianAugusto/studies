
import React from "react";
import ReactDOM from "react-dom";
import CalculatorMachine from "./Components/CalculatorMachine";
import "../scss/style.scss";


document.addEventListener("DOMContentLoaded", (event) => {
  ReactDOM.render(<CalculatorMachine />, document.getElementById("app"));
});

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "regenerator-runtime";
import "js-polyfills";
import React from "react";
import { render } from "react-dom";


/* RESET CSS */
import "./scss/reset.scss";

/* GLOBAL METHODS */
import global from "./global/index";

/* APP */
import App from "./App";


document.addEventListener("DOMContentLoaded", () => {
  global.init();

  render((
    <App />
  ), document.getElementById("app"));
});
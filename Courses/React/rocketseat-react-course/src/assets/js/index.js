
import "regenerator-runtime";
import "js-polyfills";
import React from "react";
import { render } from "react-dom";
import { createUseStyles } from "react-jss";


/* RESET CSS */
import "./reset/reset.scss";

/* GLOBAL METHODS */
import global from "./global/index";

/* ROUTES */
import Routes from "./Routes";

document.addEventListener("DOMContentLoaded", () => {
  global.init();

  render(<Routes />, document.getElementById("app"));
});

import "regenerator-runtime";
import "js-polyfills";
import React from "react";
import { render } from "react-dom";
import { createUseStyles } from "react-jss";

/* GLOBAL METHODS */
import global from "./global/index";

/* APPLICATION */
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  global.init();

  render(<App />, document.getElementById("app"));
});
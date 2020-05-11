
import "regenerator-runtime";
import "js-polyfills";
import React from "react";
import { render } from "react-dom";
import { createUseStyles } from "react-jss";

/* GLOBAL METHODS */
import global from "./global/index";

/* COMPONENTS */
import Greetings from "./Components/Greetings";

document.addEventListener("DOMContentLoaded", () => {
  global.init();

  render(<Greetings />, document.getElementById("app"));
});
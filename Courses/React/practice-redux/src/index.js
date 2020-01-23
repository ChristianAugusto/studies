
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "regenerator-runtime";
import "js-polyfills";
import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


/* RESET CSS */
// import "./reset/reset.scss";

/* GLOBAL METHODS */
import global from "./global/index";

/* APP */
import App from "./components/App";


document.addEventListener("DOMContentLoaded", () => {
  global.init();

  render((
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  ), document.getElementById("app"));
});
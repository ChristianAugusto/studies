
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
import "./reset/reset.scss";

/* GLOBAL METHODS */
import global from "./global/index";

/* PAGES */
import ShelfClass from "./components/ShelfClass";

document.addEventListener("DOMContentLoaded", () => {
  global.init();

  render((
    <BrowserRouter>
      <Switch>
        <Route exact path="/shelf-hook" component={ShelfClass} />
        <Route exact path="/shelf-class" component={ShelfClass} />
      </Switch>
    </BrowserRouter>
  ), document.getElementById("app"));
});
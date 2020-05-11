
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
import Category from "./pages/Category";
import Product from "./pages/Product";

document.addEventListener("DOMContentLoaded", () => {
  global.init();

  render((
    <BrowserRouter>
      <Switch>
        <Route exact path="/product/:id" component={Product} />
        <Route path="/" component={Category} />
      </Switch>
    </BrowserRouter>
  ), document.getElementById("app"));
});
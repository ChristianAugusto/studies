
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
import Category from "./pages/Category";
import Product from "./pages/Product";

/* GENERAL */
import Header from "./pages/components/General/Header/index";

document.addEventListener("DOMContentLoaded", () => {
  global.init();

  render((
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Category} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  ), document.getElementById("app"));
});
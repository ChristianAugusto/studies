
import "regenerator-runtime";
import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
};

const Category = () => {
  return (
    <div>
      <h1>Category</h1>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  render((
    <BrowserRouter>
      <Switch>
        <Route exact path="/product" component={Product} />
        <Route exact path="/category" component={Category} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  ), document.getElementById("app"));
});

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Category from "./pages/Category";
import Product from "./pages/Product";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Category />
      </Route>
      <Route path="/product/:id">
        <Product />
      </Route>
    </Switch>
  </Router>
);

export default Routes;

import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

/* GLOBAL STATE */
import store from "./store/index";

/* GENERAL */
import Header from "./components/General/Header";

/* PAGES */
import Openning from "./components/Openning";
import DogBreed from "./components/DogBreed";
import Personalize from "./components/Personalize";

/* APP STYLE */
import "./scss/app.scss";

export default props => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/dog-breed" component={DogBreed} />
        <Route exact path="/personalize" component={Personalize} />
        <Route path="/" component={Openning} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
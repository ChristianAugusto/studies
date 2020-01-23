
import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./Counter/index";
import counterReducer from "./Counter/reducer";

import Ecommerce from "./Ecommerce/index";


const reducers =  combineReducers({
  counter: counterReducer
});

export default props => (
  <Provider store={createStore(reducers)}>
    <Counter />
    <Ecommerce />
  </Provider>
);
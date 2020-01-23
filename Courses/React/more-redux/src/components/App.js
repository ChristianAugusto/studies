
import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./Counter/index";
import counterReducer from "./Counter/reducer";

const reducers =  combineReducers({
  counter: counterReducer
});

export default props => (
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>
);
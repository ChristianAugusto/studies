
import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import Field from "./Field";
import fieldReducer from "./fieldReducer";

const reducers =  combineReducers({
  field: fieldReducer
});

export default props => (
  <Provider store={createStore(reducers)}>
    <Field />
  </Provider>
);
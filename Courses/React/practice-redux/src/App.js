
import React from "react";
import { Provider } from "react-redux";

import store from "./store/index";

import CourseList from "./components/CourseList/index";

export default props => (
  <Provider store={store}>
    <CourseList />
  </Provider>
);
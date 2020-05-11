
import React from "react";
import { Provider } from "react-redux";

import store from "./store/index";

import CourseList from "./components/CourseList";
import Shelf from "./components/Shelf";
import Lightbox from "./components/Lightbox";

export default props => (
  <Provider store={store}>
    {/* <CourseList /> */}
    <Shelf />
    <Lightbox />
  </Provider>
);
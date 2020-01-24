
import { createStore } from "redux";

const INITIAL_STATE = {
  data: [
    "React Js",
    "React Native"
  ]
}

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [...state.data, action.newCourse] };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
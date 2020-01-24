
import { createStore } from "redux";

const INITIAL_STATE = {
  courses: [
    "React Js",
    "React Native"
  ],
  lightboxProduct: {
    name: "",
    image: "",
    price: ""
  }
}

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, courses: [...state.courses, action.newCourse] };
    case "SET_LIGHTBOX":
      const { name, image, price } = action.product;
      const newProduct = {
        name,
        image,
        price,
      }
      return {...state, lightboxProduct: newProduct};
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
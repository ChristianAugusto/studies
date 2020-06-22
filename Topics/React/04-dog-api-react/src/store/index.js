
import { createStore } from "redux";

const INITIAL_STATE = {
  personalization: {
    dogName: window.localStorage.getItem("perso-dogName") || "",
    dogBreed: window.localStorage.getItem("perso-dogBreed") || "",
    allDogBreeds: [],
    dogImage: window.localStorage.getItem("perso-dogImage") || "",
    color: window.localStorage.getItem("perso-color") || "",
    colorClass: window.localStorage.getItem("perso-colorClass") || "",
    font: window.localStorage.getItem("perso-font") || "",
    fontClass: window.localStorage.getItem("perso-fontClass") || ""
  }
};

function courses(state = INITIAL_STATE, action) {
  const { personalization } = state;
  const newPersonalization = { ...personalization };


  switch (action.type) {
    case "SET_DOG_BREED":
      const { newBreed } = action;

      newPersonalization.dogBreed = newBreed;

      return { ...state, personalization: newPersonalization };


    case "SET_ALL_DOG_BREEDS":
      const { dogBreeds } = action;

      newPersonalization.allDogBreeds = dogBreeds;

      return { ...state, personalization: newPersonalization };


    case "SET_DOG_NAME":
      const { newDogName } = action;

      newPersonalization.dogName = newDogName;

      return { ...state, personalization: newPersonalization };


    case "SET_DOG_IMAGE":
      const { newDogImage } = action;

      newPersonalization.dogImage = newDogImage;

      return { ...state, personalization: newPersonalization };


    case "SET_COLOR":
      const { newColor } = action;

      newPersonalization.color = newColor;

      return { ...state, personalization: newPersonalization };
    
    case "SET_COLOR_CLASS":
      const { newColorClass } = action;

      newPersonalization.colorClass = newColorClass;


      return { ...state, personalization: newPersonalization };


    case "SET_FONT":
      const { newFont } = action;

      newPersonalization.font = newFont;

      return { ...state, personalization: newPersonalization };


    case "SET_FONT_CLASS":
      const { newFontClass } = action;

      newPersonalization.fontClass = newFontClass;

      return { ...state, personalization: newPersonalization };


    default:
      return state;
  }
};

const store = createStore(courses);

export default store;

import React from "react";
import { useSelector } from "react-redux";

import SaveWrapper from "./style.js";

export default props => {
  const personalization = useSelector(state => state.personalization);

  const savePersonalization = () => {
    window.localStorage.setItem("perso-dogName", personalization.dogName);
    window.localStorage.setItem("perso-dogBreed", personalization.dogBreed);
    window.localStorage.setItem("perso-dogImage", personalization.dogImage);
    window.localStorage.setItem("perso-color", personalization.color);
    window.localStorage.setItem("perso-colorClass", personalization.colorClass);
    window.localStorage.setItem("perso-font", personalization.font);
    window.localStorage.setItem("perso-fontClass", personalization.fontClass);
  };

  return (
    <SaveWrapper>
      <button onClick={savePersonalization}>
        Save
      </button>
    </SaveWrapper>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CheckStepsWrapper from "./style";
import {ReactComponent as ErrorSvg} from "../../../svgs/error-personalization.svg";

export default props => {
  const dispatch = useDispatch();

  const dogImage = useSelector(state => state.personalization.dogImage);
  const dogBreed = useSelector(state => state.personalization.dogBreed);

  const [isVisible, setIsVisible] = useState(false);

  const openLightbox = () => {
    setIsVisible(true);
  }

  useEffect(() => {
    const getDogImage = async () => {
      const response = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`);
      const json = await response.json();

      dispatch({ type: "SET_DOG_IMAGE", newDogImage: json.message || "" });
    };

    if (!dogBreed) {
      openLightbox();
    } 
    else {
      if (!dogImage) {
        getDogImage();
      }
    }
  }, []);

  return (
    <CheckStepsWrapper className={isVisible ? "is--visible" : ""}>
      <div className="ch-check-steps-overlay"></div>
      <div className="ch-check-steps-wrapper">
        <div className="ch-check-steps-content">
          <ErrorSvg />
          <div className="ch-check-steps-text--wrapper">
            <p className="ch-check-steps-text">
              You don't choose a dog breed, please choose one of the following options
            </p>
          </div>
          <div className="ch-check-steps-options">
            <Link className="ch-restart" to="/">Restart</Link>
            <Link className="ch-get-back" to="/dog-breed">Back</Link>
          </div>
        </div>
      </div>
    </CheckStepsWrapper>
  );
}
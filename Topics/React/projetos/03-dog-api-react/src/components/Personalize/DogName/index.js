
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import DogNameWrapper from "./style";

export default props => {
   const dogName = useSelector(state => state.personalization.dogName);
   const dispatch = useDispatch();

   const setDogName = (event) => {
      dispatch({ type: "SET_DOG_NAME", newDogName: event.target.value });
   };

   return (
      <DogNameWrapper>
         <div className="ch-tutorial">
            <div className="ch-tutorial-title--wrapper">
               <h1 className="ch-tutorial-title">Dog name</h1>
            </div>
            <div className="ch-tutorial-text--wrapper">
               <p className="ch-tutorial-text">4) Let's choose the dog name:</p>
            </div>
         </div>
         <div className="ch-dog-name--wrapper">
            <input className="ch-dog-name" type="text" value={dogName} onChange={setDogName} placeholder="Type your dog breed here..." />
         </div>
      </DogNameWrapper>
   );
}
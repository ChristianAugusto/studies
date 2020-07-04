
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import BreedWrapper from "./style";
import getDogBreeds from "./getDogBreeds";

import { ReactComponent as SelectArrow } from "../../svgs/arrow-select.svg";

export default props => {
   const dispatch = useDispatch();
   const persoBreed = useSelector(state => state.personalization.dogBreed);
   const allDogBreeds = useSelector(state => state.personalization.allDogBreeds);
   const [breedsOptions, setBreedsOptions] = useState([]);
   const [selectIsOpen, setselectIsOpen] = useState(false);


   useEffect(() => {
      if (allDogBreeds.length === 0) {
         const buildBreedOptions = async () => setBreedsOptions( await getDogBreeds(persoBreed, dispatch) );

         buildBreedOptions();
      } 
      else {
         setBreedsOptions( allDogBreeds );
      }
   }, []);

   const handleBreedOption = (breedName) => {
      setselectIsOpen( false );
      dispatch({ type: "SET_DOG_BREED", newBreed: breedName });

      setBreedsOptions(
         breedsOptions.map(breed => {
            breed.name === breedName ? breed.isCurrent = true : breed.isCurrent = false

            return breed;
         })
      );
   };

   const clickVisor = () => {
      setselectIsOpen( !selectIsOpen );
   }

   return (
      <>
         <BreedWrapper>
            <section className="ch-tutorial">
               <div className="ch-tutorial-title--wrapper">
                  <h1 className="ch-tutorial-title">Dog Breed</h1>
               </div>
               <div className="ch-tutorial-text--wrapper">
                  <p className="ch-tutorial-text">1) Let's first choose your dog breed:</p>
               </div>
            </section>
            <section className={`ch-select${selectIsOpen ? " is--open" : ""}`}>
               <div className="ch-select--visor" onClick={clickVisor}>
                  <p>{persoBreed}</p>
                  <SelectArrow />
               </div>
               <ul className="ch-select--options">
                  {breedsOptions.map((breed, index) => (
                     <li key={index} onClick={() => handleBreedOption(breed.name)} className={breed.isCurrent ? "is--current" : ""}>
                        {breed.name}
                     </li>
                  ))}
               </ul>
            </section>
         </BreedWrapper>
         <div className="ch-navigation">  
            <Link className="ch-prev-step" to="/">Go Back</Link>
            <Link className="ch-next-step" to="/personalize">Next step</Link>
         </div>
      </>
   );
};
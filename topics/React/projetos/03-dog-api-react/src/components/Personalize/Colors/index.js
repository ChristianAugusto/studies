
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ColorsWrapper from "./style";
import getColors from "./getColors";

import { ReactComponent as SelectArrow } from "../../../svgs/arrow-select.svg";

export default props => {
   const dispatch = useDispatch();
   const persoColor = useSelector(state => state.personalization.color);
   const persoColorClass = useSelector(state => state.personalization.colorClass);
   const [colorsOptions, setColorsOptions] = useState([]);
   const [selectIsOpen, setselectIsOpen] = useState(false);


   useEffect(() => {
      const buildColorOptions = async () => setColorsOptions( await getColors(persoColor, dispatch) );

      buildColorOptions();
   }, []);

   const handleColorOption = (colorName, colorClass) => {
      setselectIsOpen( false );
      dispatch({ type: "SET_COLOR", newColor: colorName });
      dispatch({ type: "SET_COLOR_CLASS", newColorClass: colorClass });

      setColorsOptions(
         colorsOptions.map(color => {
            color.name === colorName ? color.isCurrent = true : color.isCurrent = false

            return color;
         })
      );
   };

   const clickVisor = () => {
      setselectIsOpen( !selectIsOpen );
   }

   return (
      <ColorsWrapper>
         <div className="ch-tutorial">
            <div className="ch-tutorial-title--wrapper">
               <h1 className="ch-tutorial-title">Dog name color</h1>
            </div>
            <div className="ch-tutorial-text--wrapper">
               <p className="ch-tutorial-text">2) Let's choose the dog name color:</p>
            </div>
         </div>
         <div className={`ch-select${selectIsOpen ? " is--open" : ""}`}>
            <div className={`ch-select--visor ${persoColorClass}`} onClick={clickVisor}>
               <p>{persoColor}</p>
               <SelectArrow />
            </div>
            <ul className="ch-select--options">
               {colorsOptions.map((color, index) => (
                  <li key={index} onClick={() => handleColorOption(color.name, color.class)} className={`${color.class}${color.isCurrent ? " is--current" : ""}`}>
                     {color.name}
                  </li>
               ))}
            </ul>
         </div>
      </ColorsWrapper>
   );
};

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FontsWrapper from "./style";
import getFonts from "./getFonts";

import { ReactComponent as SelectArrow } from "../../../svgs/arrow-select.svg";

export default props => {
   const dispatch = useDispatch();
   const persoFont = useSelector(state => state.personalization.font);
   const persoFontClass = useSelector(state => state.personalization.fontClass);
   const [fontsOptions, setFontsOptions] = useState([]);
   const [selectIsOpen, setselectIsOpen] = useState(false);


   useEffect(() => {
      const buildFontsOptions = async () => setFontsOptions( await getFonts(persoFont, dispatch) );

      buildFontsOptions();
   }, []);

   const handleFontOption = (fontName, fontClass) => {
      setselectIsOpen( false );
      dispatch({ type: "SET_FONT", newFont: fontName });
      dispatch({ type: "SET_FONT_CLASS", newFontClass: fontClass });

      setFontsOptions(
         fontsOptions.map(font => {
            font.name === fontName ? font.isCurrent = true : font.isCurrent = false

            return font;
         })
      );
   };

   const clickVisor = () => {
      setselectIsOpen( !selectIsOpen );
   }

   return (
      <FontsWrapper>
         <div className="ch-tutorial">
            <div className="ch-tutorial-title--wrapper">
               <h1 className="ch-tutorial-title">Dog name font</h1>
            </div>
            <div className="ch-tutorial-text--wrapper">
               <p className="ch-tutorial-text">3) Let's choose the dog name font:</p>
            </div>
         </div>
         <div className={`ch-select${selectIsOpen ? " is--open" : ""}`}>
            <div className={`ch-select--visor ${persoFontClass}`} onClick={clickVisor}>
               <p>{persoFont}</p>
               <SelectArrow />
            </div>
            <ul className="ch-select--options">
               {fontsOptions.map((font, index) => (
                  <li key={index} onClick={() => handleFontOption(font.name, font.class)} className={`${font.class}${font.isCurrent ? " is--current" : ""}`}>
                     {font.name}
                  </li>
               ))}
            </ul>
         </div>
      </FontsWrapper>
   );
};

import React from "react";
import { Link } from "react-router-dom";

import PersonalizeWrapper from "./style";

import Colors from "./Colors";
import Fonts from "./Fonts";
import DogName from "./DogName";
import Save from "./Save";
import Preview from "./Preview";
import CheckSteps from "./CheckSteps";

export default props => (
   <>
      <PersonalizeWrapper>
         <article className="ch-personalize-article">
            <Colors />
            <Fonts />
            <DogName />
            <Save />
         </article>
         <Preview />
      </PersonalizeWrapper>
      <CheckSteps />
      <div className="ch-navigation">  
         <Link className="ch-prev-step" to="/dog-breed">Go Back</Link>
      </div>
   </>
);
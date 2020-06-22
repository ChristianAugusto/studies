
import React from "react";
import { Link } from "react-router-dom";

import Openning from "./style";

export default props => (
   <>
      <Openning>
         <section className="ch-tutorial-title-wrapper">
            <h1 className="ch-tutorial-title">
               Choose your dog
            </h1>
         </section>
         <section className="ch-tutorial-text-wrapper">
            <p className="ch-tutorial-text">This site will help you to find a beatifull pet, the best friend of human, the Dog! To pass one step, just click on arrow on the right side. If are necessary come back, click on arrow on the left side.</p>
         </section>
      </Openning>
      <div className="ch-navigation">  
         <Link className="ch-next-step" to="/dog-breed">Next step</Link>
      </div>
   </>
);

import React, { Component } from "react";

/* RESET CSS */
import "./reset/reset.scss";


/* COMPONENTS */
import Header from "./components/Header/index";
import Shelf from "./components/Shelf/index";


export default props => (
   <div>
      <Header />
      <main>
         <Shelf />
      </main>
   </div>
);
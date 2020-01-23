
import React, { Component } from "react";

/* COMPONENTS */
import Header from "./components/General/Header/index";
import Shelf from "./components/Category/Shelf/index";


export default props => (
   <div>
      <Header />
      <main>
         <Shelf />
      </main>
   </div>
);

import React from "react";
import ReactDOM from "react-dom";

// import PrimeiroComponente from "./componentes/PrimeiroComponente";
// import { CompA, CompB } from "./componentes/DoisComponentes";

import Familia from "./componentes/familia/index";
import FamiliaSobrenomeVariavel from "./componentes/familiaSobrenomeVariavel/index";
import FamiliaDinamica from "./componentes/familiaDinamica/index";
import Membro from "./componentes/Membro";

ReactDOM.render(
  <div>
    <div id="familia-martins">
      <Familia>
        <Membro nome="Christian" sobrenome="Martins" />
        <Membro nome="Arli" sobrenome="Martins" />
        <Membro nome="Arlete" sobrenome="Martins" />
      </Familia>
    </div>
    <br />
    <div id="familia-sobrenome-variavel"></div>
    <br />
    <div id="familia-dinamica"></div>

    {/* <PrimeiroComponente valor="Bom dia!" aBcD={123} />
    <CompA valor="1" />
    <CompB valor="2" /> */}
  </div>
, document.getElementById("root"));

ReactDOM.render(
  FamiliaSobrenomeVariavel( {sobrenome: "Silva"})
, document.getElementById("familia-sobrenome-variavel"));

ReactDOM.render(
  <FamiliaDinamica sobrenome="Santos">
    <Membro nome="Isaías"/>
    <Membro nome="Guiomar"/>
  </FamiliaDinamica>
, document.getElementById("familia-dinamica"));
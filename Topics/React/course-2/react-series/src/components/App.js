
import React from "react";

import Counter from "./Counter";
import SoccerScore from "./SoccerScore";

const soccerScoreData = {
  stadium: "Maracanã/RJ",
  date: "01/06/2016",
  hour: "19:00",
  home: "Vasco",
  away: "Flamengo"
};

export default class App extends React.Component {
  render() {
    return (
      <main id="main">
        <Counter />
        <SoccerScore {...soccerScoreData} />
      </main>
    );
  }
};

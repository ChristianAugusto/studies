
import React from "react";

const Team = (props) => {
  return (
    <div className="ch-soccer-match__team">
      <div className="ch-soccer-match__team-side">
        <p>{props.side}</p>
      </div>
      <div className="ch-soccer-match__team-content">
        <p className="ch-soccer-match__team-name">{props.teamName}</p>
        <p className="ch-soccer-match__team-score">{props.score}</p>
        <button className="ch-soccer-match__team-goal-button" onClick={props.makeGoal}>Goal!</button>
      </div>
    </div>
  );
};

export default Team;
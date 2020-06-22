
import React from "react";

const Match = (props) => {
  return (
    <div className="ch-soccer-match__event">
      <div className="ch-soccer-match__event-stadium">
        <p>{props.stadium}</p>
      </div>
      <div className="ch-soccer-match__event-date-hour">
        <p className="ch-soccer-match__event-date">{props.date}</p>
        <p className="ch-soccer-match__event-separator">-</p>
        <p className="ch-soccer-match__event-hour">{props.hour}</p>
      </div>
    </div>
  )
};

export default Match;
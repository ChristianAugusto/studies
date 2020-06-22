
import React from "react";
import Team from "./Team";
import Match from "./Match";
import matchData from "../modules/getMatchData";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      scoreTeamHome: 0,
      scoreTeamAway: 0
    };
  };

  goalTeamHome() {
    this.setState({
      scoreTeamHome: this.state.scoreTeamHome + 1
    });
  };

  goalTeamAway() {
    this.setState({
      scoreTeamAway: this.state.scoreTeamAway + 1
    });
  };

  render() {
    return (
      <div className="ch-soccer-match">
        <div className="ch-soccer-match__container">
          <Team {...matchData} side="Home" teamName={matchData.home} score={this.state.scoreTeamHome} makeGoal={this.goalTeamHome.bind(this)} />
          <Match {...matchData} />
          <Team {...matchData} side="Away" teamName={matchData.away} score={this.state.scoreTeamAway} makeGoal={this.goalTeamAway.bind(this)} />
        </div>
      </div>
    );
  };
};
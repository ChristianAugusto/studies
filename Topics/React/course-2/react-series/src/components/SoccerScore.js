
import React from "react";

const Time = props => (
  <div className="team">
    <p>{props.side}</p>
    <div>
      <p>{props.name}</p>
      <p>{props.score}</p>
      <button onClick={props.gol}>Gol!</button>
    </div>
  </div>
);

const Match = props => (
  <div className="match">
    <div className="match-local">
      <p className="match-stadium">{props.stadium}</p>
    </div>
    <div className="match-time">
      <p className="match-date">{props.date}</p>
      <p className="match-space">-</p>
      <p className="match-hour">{props.hour}h</p>
    </div>
  </div>
);

export default class SoccerScore extends React.Component {
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
    console.log(this.props);
  };

  render() {
    return (
      <section className="soccer-score">
        <Time side="Home" name={this.props.home} score={this.state.scoreTeamHome} gol={this.goalTeamHome.bind(this)} />
        <Match stadium={this.props.stadium} date={this.props.date} hour={this.props.hour} />
        <Time side="Away" name={this.props.away} score={this.state.scoreTeamAway} gol={this.goalTeamAway.bind(this)} />
      </section>
    );
  };
};

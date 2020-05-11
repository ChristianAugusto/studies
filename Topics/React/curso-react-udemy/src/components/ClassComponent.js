
import React, { Component } from "react";

export default class Counter extends Component {
  /*
  // Solucao 1
  constructor(props) {
    super(props);
    this.inc = this.inc.bind(this);
  }
  */

  state = {
    value: 0
  }

  inc = () => {
    const { value } = this.state;

    this.setState({
      value: value + 1
    });
  }

  dec = () => {
    const { value } = this.state;

    this.setState({
      value: value - 1
    });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <p>{value}</p>
        <button onClick={this.inc}>+</button>
        {/* <button onClick={() => this.inc()}>+</button> */}
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}
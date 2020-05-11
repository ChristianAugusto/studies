
import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  decrementar() {
    this.setState({
      counter : this.state.counter - 1
    });
  }

  incrementar() {
    this.setState({
      counter : this.state.counter + 1
    });
  }

  render() {
    return (
      <section className="counter">
        <p>{this.state.counter}</p>
        <div>
          <button onClick={this.decrementar.bind(this)}>-</button>
          <button onClick={this.incrementar.bind(this)}>+</button>
        </div>
      </section>
    );
  }
};

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { inc, dec, stepChange } from "./actions";

const Counter = props => {
  const { number, step } = props.counter;

  return (
    <div>
      <button onClick={props.dec}>Dec</button>
      <p>{number}</p>
      <button onClick={props.inc}>Inc</button>
      <input type="number" onChange={props.stepChange} value={step} />
    </div>
  );
};

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChange }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
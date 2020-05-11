
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeValue } from "./fieldActions";

class Field extends Component {

  render() {
    const { value } = this.props;

    return (
      <div>
        <p>{value}</p>
        <input type="text" value={value} onChange={this.props.changeValue} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.field.value
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);
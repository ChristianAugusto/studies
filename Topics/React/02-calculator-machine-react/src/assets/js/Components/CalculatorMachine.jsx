
import React from "react";


export default class CalculatorMachine extends React.Component {

  constructor() {
    super();
    this.state = {
      visorFirstNumber: 0,
      visorOperation: "",
      visorSecondNumber: "",
      result: "",
      containerClass: "calculator-pad-container initial decimal-block"
    };
  };

  clearVisor() {
    this.setState({
      visorFirstNumber: 0,
      visorOperation: "",
      visorSecondNumber: "",
      result: "",
      containerClass: "calculator-pad-container initial"
    });
  };

  setValue(_val) {
    const classes = this.state.containerClass;

    if (classes.indexOf("initial") !== -1) {
      this.setState({
        visorFirstNumber: _val,
        containerClass: "calculator-pad-container first-number is--typing"
      });
    }
    else if(classes.indexOf("first-number is--typing") !== -1) {
      this.setState({
        visorFirstNumber: `${this.state.visorFirstNumber}${_val}`
      });
    }
    else if(classes.indexOf("second-number is--typing") !== -1) {
      this.setState({
        visorSecondNumber: `${this.state.visorSecondNumber}${_val}`
      });
    }
    else if (classes.indexOf("second-number") !== -1) {
      this.setState({
        visorSecondNumber: _val,
        containerClass: "calculator-pad-container second-number is--typing allow-calculate-button"
      });
    }
  };

  setOperation(_val) {
    this.setState({
      visorOperation: _val,
      containerClass: "calculator-pad-container second-number decimal-block"
    });
  };

  decimalNumber() {
    const classes = this.state.containerClass;

    if (classes.indexOf("first-number is--typing") !== -1) {
      this.setState({
        visorFirstNumber: `${this.state.visorFirstNumber}.`,
      });
    }
    else if (classes.indexOf("second-number is--typing") !== -1) {
      this.setState({
        visorSecondNumber: `${this.state.visorSecondNumber}.`,
      });
    }

    this.setState({
      containerClass: `${this.state.containerClass} decimal-block`,
    });
  };

  calculateResult() {
    const number1 = parseFloat(this.state.visorFirstNumber);
    const number2 = parseFloat(this.state.visorSecondNumber);
    
    const operation = this.state.visorOperation;

    let result = "Error";

    switch (operation) {
      case '/':
        result = number1 / number2;
      break;
      case '*':
        result = number1 * number2;
      break;
      case '+':
        result = number1 + number2;
      break;
      case '-':
        result = number1 - number2;
      break;
    }


    this.setState({
      visorFirstNumber: "",
      visorOperation: "",
      visorSecondNumber: "",
      result,
      containerClass: "calculator-pad-container block-all"
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator-container">
          <div className="calculator-visor">
            <p className="calculator-visor-number">{this.state.visorFirstNumber}</p>
            <p className="calculator-visor-operation">{this.state.visorOperation}</p>
            <p className="calculator-visor-number">{this.state.visorSecondNumber}</p>
            <p className="calculator-visor-result">{this.state.result}</p>
          </div>
          <div className={this.state.containerClass}>
            <div className="calculator-numpad">
              <ul className="calculator-numpad__list">
                <li className="clear-button"><button onClick={this.clearVisor.bind(this)}>c</button></li>
                <li className="percent-button"><button onClick={this.setOperation.bind(this, "%")}>%</button></li>
              </ul>
              <ul className="calculator-numpad__list">
                <li className="number-button"><button onClick={this.setValue.bind(this, 7)}>7</button></li>
                <li className="number-button"><button onClick={this.setValue.bind(this, 8)}>8</button></li>
                <li className="number-button"><button onClick={this.setValue.bind(this, 9)}>9</button></li>
              </ul>
              <ul className="calculator-numpad__list">
                <li className="number-button"><button onClick={this.setValue.bind(this, 4)}>4</button></li>
                <li className="number-button"><button onClick={this.setValue.bind(this, 5)}>5</button></li>
                <li className="number-button"><button onClick={this.setValue.bind(this, 6)}>6</button></li>
              </ul>
              <ul className="calculator-numpad__list"> 
                <li className="number-button"><button onClick={this.setValue.bind(this, 1)}>1</button></li>
                <li className="number-button"><button onClick={this.setValue.bind(this, 2)}>2</button></li>
                <li className="number-button"><button onClick={this.setValue.bind(this, 3)}>3</button></li>
              </ul>
              <ul className="calculator-numpad__list">
                <li className="number-button"><button onClick={this.setValue.bind(this, 0)}>0</button></li>
                <li className="decimal-button"><button onClick={this.decimalNumber.bind(this)}>.</button></li>
                <li className="number-button pi-button"><button onClick={this.setValue.bind(this, 3.141592)}>pi</button></li>
              </ul>
            </div>
            <div className="calculator-operation-pad">
              <ul className="calculator-operation-pad__list">
                <li className="operation-button"><button onClick={this.setOperation.bind(this, "/")}>/</button></li>
                <li className="operation-button"><button onClick={this.setOperation.bind(this, "*")}>*</button></li>
                <li className="operation-button"><button onClick={this.setOperation.bind(this, "+")}>+</button></li>
                <li className="operation-button"><button onClick={this.setOperation.bind(this, "-")}>-</button></li>
                <li className="calculate-button"><button onClick={this.calculateResult.bind(this)}>=</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
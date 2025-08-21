import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 22 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((curState) => {
      return { count: this.state.count - 1 };
    });
  }
  handleIncrement() {
    this.setState((curState) => {
      return { count: this.state.count + 1 };
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </>
    );
  }
}

export default Counter;

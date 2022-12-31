import React, { Component } from "react";
import Child from "./Child";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countDown: 0,
    };
  }
  increment = () => {
    console.log("i am running");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        countDown: prevState.countDown + 1,
      }));
    }, 1000);
  };
  decrement = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        countDown: prevState.countDown - 1,
      }));
      // if (this.state.countDown === 0) {
      //   this.stopCountDown();
      //   this.setState({
      //     countDown: 0,
      //   });
      // }
    }, 1000);
  };
  startDecrement = () => {
    this.stopCountDown();
    this.decrement();
  };
  startIncrement = () => {
    this.stopCountDown();
    this.increment();
  };
  stopCountDown = () => {
    clearInterval(this.interval);
  };

  render() {
    console.log(this, "test this value");
    return (
      <div>
        <Child countDown={this.state.countDown} test={this.state.countDown} />
        {/* <p>{this.props.children}</p> */}
        <button onClick={this.startIncrement}>Start Increment</button>
        <button onClick={this.startDecrement}>Start decrement</button>
        <button onClick={this.stopCountDown}>Stop</button>
      </div>
    );
  }
}

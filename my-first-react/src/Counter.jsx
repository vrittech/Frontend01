import React from "react";

export default class TestInterval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countDown: 0, // An integer from father component
    };
  }
  increment = () => {
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
      if (this.state.countDown === 0) {
        this.stopCountDown();
        this.setState({
          countDown: 0,
        });
      }
    }, 1000);
  };
  startDecrement = () => {
    clearInterval(this.interval);
    this.decrement(false);
  };
  startIncrement = () => {
    clearInterval(this.interval);
    this.increment(true);
  };
  stopCountDown = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div>
        <p>{this.state.countDown}</p>
        <button onClick={this.startIncrement}>Start Incement</button>
        <button onClick={this.startDecrement}>Start decrement</button>
        <button onClick={this.stopCountDown}>Stop</button>
      </div>
    );
  }
}

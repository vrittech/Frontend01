import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // this.changeColor = this.changeColor.bind(this);
    this.state = {
      brand: "Huwai",
      color: "red",
      year: 1964,
    };
  }
  changeColor() {
    this.setState({ color: "blue" });
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

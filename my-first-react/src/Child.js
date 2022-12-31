import React, { Component } from "react";

export default class Child extends Component {
  // componentWillUnmount() {
  //   alert("The component named child is about to be unmounted.");
  // }
  render() {
    console.log(this, "test this");
    return <>{this.props.countDown}</>;
  }
}

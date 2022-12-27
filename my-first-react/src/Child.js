import React, { Component } from "react";

export default class Child extends Component {
  componentWillUnmount() {
    alert("The component named child is about to be unmounted.");
  }
  render() {
    return <h1>Hello JS!</h1>;
  }
}

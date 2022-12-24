import React, { Component } from "react";

export default class ClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    // this.changeName = this.changeName.bind(this);
    this.state = {
      fullName: "Damon Yadav",
    };
  }
  changeName = () => {
    console.log(this, "this");
    this.setState({ fullName: "test" });
  };
  // state full component
  render() {
    return (
      // fragments
      <React.Fragment>
        <div>{this.state.fullName}</div>
        <button onClick={this.changeName}>Change Name</button>
      </React.Fragment>
    );
  }
}

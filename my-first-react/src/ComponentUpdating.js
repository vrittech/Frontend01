import React, { Component } from "react";

export default class ComponentUpdating extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Java" };
    console.log(this.props, "test props");
  }
  //   static getDerivedStateFromProps(props, state) {
  //     return { name: props.updatedName };
  //   }

  //should component update
  shouldComponentUpdate() {
    return true;
  }

  changeName = () => {
    console.log("hello i am runnign");
    this.setState({ name: "Python" });
  };
  // can access the values of previous state and props
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML = "Before:" + prevState.name;
  }
  // component did update
  componentDidUpdate() {
    document.getElementById("div2").innerHTML = "After:" + this.state.name;
  }

  //   The render() method is called when component gets updated, it has to re-render the HTML to the DOM, with the new changes.
  render() {
    return (
      <>
        <div>{this.state.name}</div>
        <button onClick={this.changeName}>Change Name</button>
        <div id="div1"></div>
        <div id="div2"></div>
      </>
    );
  }
}

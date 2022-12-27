import React, { Component } from "react";
import Child from "./Child";
export default class ComponentUnmounting extends Component {
  constructor(props) {
    super(props);
    this.state = { showChild: true };
  }
  hideChild = () => {
    this.setState({ showChild: false });
  };
  render() {
    let childElem;
    if (this.state.showChild) {
      childElem = <Child />;
    }
    return (
      <div>
        {childElem}
        <button type="button" onClick={this.hideChild}>
          Hide Child
        </button>
      </div>
    );
  }
}

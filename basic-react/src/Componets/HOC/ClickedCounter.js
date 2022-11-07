import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickedCounter extends Component {

  render() {
    const { count, IncrementCounert } = this.props;
    return (
      <div>
        <button onClick={IncrementCounert}>{this.props.name} Click {count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickedCounter,7);

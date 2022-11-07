import React, { Component } from "react";

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  //for side Effect
  // it will only excute one time for initialised count
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  // it will excute after every re-render
  componentDidUpdate(orevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`update titles`);
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          clicked {this.state.count}{" "}
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;

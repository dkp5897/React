import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increament = () => {
    // if we try to change state directely , it will not change, it only chnage in console
    // this.state.count+=1;

    //setState is asynchronous call means syn-code run before setState excute
    // setState has two parameters one is for state object and second is a callback function (arrow function)
    // If there is a code has to be excuted after the state has been updated, place that code in the callback function (second parameter of setState)
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(`callback Values - ${this.state.count}`);   //async
    //   }
    // );

    // In this we are not using the current value, we are using previous state to update value
    this.setState(
      (previousState,props) => ({
        count: previousState.count + 1,
      }),
      () => {
        console.log(`callback Values - ${this.state.count}`);
      }
    );
    console.log(this.state.count); //sync
  };

  //react make group of multiple state call into a single update for better performance
  // means all the five are called in a single go that's why update value will not carry over for different call
  // so when we have to update the value on the basis of previous state we have to use a callback
  IncreamentFive() {
    this.Increament();
    this.Increament();
    this.Increament();
    this.Increament();
    this.Increament();
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.IncreamentFive()}>Click</button>
      </div>
    );
  }
}

export default Counter;

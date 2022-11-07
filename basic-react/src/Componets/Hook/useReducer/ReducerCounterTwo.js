import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (state, action) => {
  //in this action decied what single value this reduer function is going to return
  switch (action.type) {
    case "increment":
      return {...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return {...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return {...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return {...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function ReducerCounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div id="first-counter">
        <h1>first-count - {count.firstCounter}</h1>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment-5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement-5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>

      <div id="second-counter">
        <h1>second-count - {count.secondCounter}</h1>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default ReducerCounterTwo;


// we can mantain both action and state as object
// using action as object we can pass more additional number of data to reducer function
// by making state as object we areb able to keep track multiple state variable
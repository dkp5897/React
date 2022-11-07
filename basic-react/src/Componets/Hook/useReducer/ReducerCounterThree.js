import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerCounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>count-1: {count}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <h1>count-2: {count2}</h1>
      <button onClick={() => dispatch2("increment")}>increment</button>
      <button onClick={() => dispatch2("decrement")}>decrement</button>
      <button onClick={() => dispatch2("reset")}>reset</button>
    </div>
  );
}

export default ReducerCounterThree;

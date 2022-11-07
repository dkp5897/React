// useReducer : Locat state management i.e. at the componet level
//Shar state between components : Globle state management => useReducer + useContext

import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  //in this action decied what single value this reduer function is going to return
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
function ReducerWithContext() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
        <h1>count: {count}</h1>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </CountContext.Provider>
    </div>
  );
}

export default ReducerWithContext;

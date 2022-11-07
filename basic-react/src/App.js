import React from "react";
import "./App.css";
import ContextValueProvider from "./Componets/Context/ContextHook/ContextValueProvider";
import ClickedCounter from "./Componets/HOC/ClickedCounter";
import HoverCounter from "./Componets/HOC/HoverCounter";
import ReducerWithContext from "./Componets/Hook/useReducer/Reducer&Context/ReducerWithContext";

import ReducerCounter from "./Componets/Hook/useReducer/ReducerCounter";
import ReducerCounterThree from "./Componets/Hook/useReducer/ReducerCounterThree";
import ReducerCounterTwo from "./Componets/Hook/useReducer/ReducerCounterTwo";
import ReducerDataFetching from "./Componets/Hook/useReducer/ReducerFetchData/ReducerDataFetching";
import StateDataFetching from "./Componets/Hook/useReducer/ReducerFetchData/StateDataFetching";
import Constructor from "./Componets/LifeCycleMethods/Mounting/1Constructor()";
import GetDerivedStateFromProps from "./Componets/LifeCycleMethods/Mounting/2getDerivedStateFromProps";
import ComponentsDidmount from "./Componets/LifeCycleMethods/Mounting/4ComponentsDidmount";
import ComponentWillUnmount from "./Componets/LifeCycleMethods/Unmounting/componentWillUnmount";
import ComponentDidUpdateMethod from "./Componets/LifeCycleMethods/Updating/componentDidUpdate";
import GetSnapshotBeforeUpdateMethod from "./Componets/LifeCycleMethods/Updating/getSnapshotBeforeUpdate";
import ShouldComponentUpdateMethod from "./Componets/LifeCycleMethods/Updating/shouldComponentUpdate";
import RouterComponent from "./Componets/Router/RouterComponent";
import ContextProviderApp from "./Componets/Context/ContextProviderApp"
import Uncontrolled from "./Componets/Hook/RefHook/Uncontrolled";


function App() {
  return (
    <div className="App">
      <Uncontrolled/>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import ErrorBoundry from "./Componets/ErrorBoundry/ErrorBoundry";
import Hero from './Componets/ErrorBoundry/Hero'
import RouterComponent from './Componets/Router/Components/RouterComponent'

function App() {
  return (
    <div className="App">
      
        <RouterComponent/>
     
    </div>
  );
}

export default App;

import React from "react";
import "./App.css"
// import { ReactDOM } from "react-dom";

// import Heading from "./Header";
// import List from "./MoviesList";
// import Para from "./Para";
import FirstRef from "./RefComponent/FirstRef";
import FRParentInput from "./RefComponent/ForwardRef/FRParentInput";
import ParentsRef from "./RefComponent/RefClass/ParentsRef";

function App() {
  return (
    <div className="App" >
      {/* <Heading />
      <Para />
      <List></List>
      <Heading />
      <Para />
      <List></List> */}

      {/* <FirstRef/> */}

      {/* <ParentsRef/> */}
      <FRParentInput/>
    </div>
  );
}

export default App;
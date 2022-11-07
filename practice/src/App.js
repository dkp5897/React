import React from "react";
import './App.css'
import Component from "./Component";
import Hero from "./Hero";

const App = () =>{
    const data = {
        name:"Raajn",
        age:25,
        sailary:540000
    }
    const arr  = ['banana','apple','mango']
    return(
        <div className="app">
        <Component>
            <Hero heroName='superman'/>
        </Component>
        {/* <Component data = {data} array = {arr}/> */}
        </div>
    )
}

export default App
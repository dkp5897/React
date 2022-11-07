import { useState } from "react";
import "./App.css";
import ColorBox from "./SelectColor/SelectColor";
import Selection from "./Selection/Selection";

function App() {

  const [getColor,setColor] = useState({background:""})
  const [SelectedColor,setSelectedColor] = useState([
    {id:"1",background:""},
    {id:"2",background:""},
    {id:"3",background:""}
  ])

  function SelectColor(backColor){
    setColor({background:backColor})
  }

  
  const applyColor=(index)=>{
    let list = SelectedColor[index];
    list.background=getColor.background
    setSelectedColor([...SelectedColor,list])
  }

  

  return (
    <div className="App">
      <div className="SelectColor">
        <ColorBox onSelectHandler={SelectColor} id="1" color="red"/>
        <ColorBox onSelectHandler={SelectColor} id="2" color="Yellow"/>
        <ColorBox onSelectHandler={SelectColor} id="3" color="green"/>
      </div>
      <div>
        <Selection applyColor ={applyColor} id="0" fillColor={SelectedColor[0].background}/>
        <Selection applyColor ={applyColor} id="1" fillColor={SelectedColor[1].background}/>
        <Selection applyColor ={applyColor} id="2" fillColor={SelectedColor[2].background}/>
      </div>
    </div>
  );
}

export default App;

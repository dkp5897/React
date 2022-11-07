
import React, { useState } from 'react'

function ColorChange() {

    const [getColor,setColor] = useState({
        color:"",
        fontSize:"",
        backgroundColor:""
    });

    const [getBack,setBack] = useState(false)

    const clickHandler =()=>{
        setColor({
            color:"blue",
            fontSize:"70px",
            backgroundColor:"red"
        })
        setBack(true)
    }

    const backHandler = () =>{
        setColor({
        color:"",
        fontSize:"",
        backgroundColor:""
        })
        setBack(false);
    }

  return (
    <div>
      <h1 style={getColor}>Click on button to change the color of paragraph</h1>
      {getBack ? <button onClick={backHandler}>getBack</button> :<button onClick={clickHandler}>Click</button>}
    </div>
  )
}

export default ColorChange

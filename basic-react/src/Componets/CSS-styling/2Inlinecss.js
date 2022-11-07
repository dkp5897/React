import React from 'react'

function Inline() {

    const heading = {
        fontSize : "70px",
        color : "blue",
        backgroundColor : "green"
    }

  return (
    <div>
      <h1 style={heading}>Inline with object</h1>
      <h2 style={{color:"red", fontSize : "70px"}}>Inline</h2>
    </div>
  )
}

export default Inline

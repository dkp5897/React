
import React from 'react'

function ChildCoponent(props) {
  return (
    <div>
      {/* <button onClick={()=>props.greetHandler("child")}>greet click</button> */}
      <button onClick={()=>props.ParantHandler("child")}>greet click</button>
    </div>
  )
}

export default ChildCoponent


import React, { useState }  from 'react'
import UseEeffectUnmount from './4useEeffectUnmount'

function UnmountToggle() {
    const [display, setDisplay ] = useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {display && <UseEeffectUnmount/>}
    </div>
  )
}

export default UnmountToggle

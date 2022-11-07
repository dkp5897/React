
import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const IncreamentFive =()=>{
        for(let i =0;i<5;i++){
            setCount(prevCount => prevCount+1);
        }
    }

  return (
    <div>
    Count : {count}
      <button onClick={()=>setCount(prevCount => prevCount+1)}>Increament</button>
      <button onClick={()=>setCount(prevCount => prevCount-1)}>Decreament</button>
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={IncreamentFive}>Increament 5</button>
    </div>
  )
}

export default HookCounterTwo

// means we should always use previous state to find next state 
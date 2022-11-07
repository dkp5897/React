
import React, { useEffect, useState } from 'react'

function IntervalCounter() {

    const [count ,setCount] = useState(0);

    // method-1

    // const tick = ()=>{
    //     setCount(count+1)
    // }

    // useEffect(()=>{
    //     const inteval = setInterval(tick,1000)

    //     return ()=>{
    //         clearInterval(inteval)
    //     }
    // },[count ])

    
    // method-2
    const tick = ()=>{
        setCount(prevCount => prevCount+1)
    }

    useEffect(()=>{
        const inteval = setInterval(tick,1000)
        return()=>{
            clearInterval(inteval)
        }
    },[])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default IntervalCounter

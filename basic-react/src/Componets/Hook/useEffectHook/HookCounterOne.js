
import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count , setCount] = useState(0);

    useEffect(()=> {
        document.title = `You clicked ${count} times`
    })

  return (
    <div>
      <button onClick={()=> setCount(count + 1)}>clicked {count}</button>
    </div>
  )
}

export default HookCounterOne

// useEffect excute this callback function after every time the element re-render
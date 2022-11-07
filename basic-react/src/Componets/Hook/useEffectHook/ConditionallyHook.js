
import React, { useState ,useEffect } from 'react'

function ConditionallyHook() {
    const [count , setCount] = useState(0);
    const [name,setName] = useState('')


    useEffect(()=> {
        console.log(`updating titles`)
        document.title = `You clicked ${count} times`
    },[count])

  return (
    <div>
    <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={()=> setCount(count + 1)}>clicked {count}</button>
    </div>
  )
}

export default ConditionallyHook

// second parameter of useEffect is array in which we specified on which change the useEffect excute callback funtion
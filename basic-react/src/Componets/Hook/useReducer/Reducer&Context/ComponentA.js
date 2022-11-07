import React, { useContext } from 'react'
import { CountContext } from './ReducerWithContext'

function ComponentA() {
    const countContext = useContext(CountContext)
  return (
    <div>
      ComponentA - {countContext.countState}
      <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>reset</button>
    </div>
  )
}

export default ComponentA

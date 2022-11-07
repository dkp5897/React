
import React, {useContext} from 'react'
import {CountContext} from './ReducerWithContext'

function ComponentD() {
    const countContext = useContext(CountContext)
    return (
      <div>
         ComponentD - {countContext.countState}
        <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}>reset</button>
      </div>
    )
}

export default ComponentD

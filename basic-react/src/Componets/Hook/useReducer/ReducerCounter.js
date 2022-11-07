// If I want to make two counter so we can use state and action object like in ReduerCouneterTwo or we can use two useReducer hook like in this
import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state,action) =>{ //in this action decied what single value this reduer function is going to return
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }    

}

function ReducerCounter() {
   const [count , dispatch] = useReducer(reducer , initialState)
  return (
    <div>
        <h1>count - {count}</h1>
      <button onClick={()=> dispatch('increment') }>Increment</button>
      <button onClick={()=> dispatch('decrement') }>Decrement</button>
      <button onClick={()=> dispatch('reset') }>Reset</button>
    </div>
  )
}

export default ReducerCounter

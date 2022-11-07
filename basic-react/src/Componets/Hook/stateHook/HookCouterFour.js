
import React, { useState } from 'react'

function HookCouterFour() {

    const [items , setitems] = useState([])

    const addItem = () =>{
        setitems([...items, {
            id : items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }

  return (
    <div>
    <button onClick={addItem}>Add a Number</button>
      <ul>
        {
            items.map((item)=>(
                <li key={item.id}>{item.value}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default HookCouterFour


// setitems([...items, {
//     id : items.length,
//     value: Math.floor(Math.random()*10)+1
// }])

// the meaning of this is copy all items of array and append new item i.e id and value
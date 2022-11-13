import React from 'react'

function List(props) {
  const {list,deleteItem,editItem} = props
  return (
    <div>
    <ul>
      {list.map((item,index)=>{
        return(
          <div key={index}>
          <li>{item}</li>
          <button onClick={()=>editItem(index)}>Edit</button>
          <button onClick={()=>deleteItem(index)}>Delete</button>
          </div>
        )
      })}
    </ul>
    </div>
  )
}

export default List

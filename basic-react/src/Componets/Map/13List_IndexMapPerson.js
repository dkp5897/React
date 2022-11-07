
import React from 'react'

function ListIndex() {
    const names = ['Rajan','Sooraj','Amit','Saurabh']
    const nameList = names.map((name,index)=> <h2 key={index} >{name}</h2>)
  return (
    <div>
      {nameList}
    </div>
  )
}

export default ListIndex



//when to use index as a key:-
//1.    the items in your list do not have a unique id.
//2.    the list is static and will not change  (niether adding nor removing)
//3.    the list will nevr be ordered or filter
import React from 'react'

function Input(props) {
  const {inputData,changeHandler,addTask,setEdit,editSubmit} = props
  return (
    <div>
      <input type='text' value={inputData} onChange={changeHandler}/>
      {setEdit ? <button onClick={editSubmit}>Edit</button> : <button onClick={addTask}>Add</button>}
    </div>
  )
}

export default Input


import React, { useRef, useState } from 'react'

function Uncontrolled() {

    const [show,setShow] = useState(false)

    const name = useRef(null)

    const submitfunction = (e) =>{
        e.preventDefault()
        console.log(name.current.value)
        if(name.current.value === ""){
            alert("please fill the data")
        }else{
            setShow(true)
        }
    }


  return (
    <div>
      <form onSubmit={submitfunction}>
        <div>
            <label htmlFor='name'>Your lucky name </label>
            <input type="text" id='name' ref={name}/>
            <button>submit</button>
        </div>
      </form>
      <p>{show ? `Your locky name is ${name.current.value}` : null}</p>
    </div>
  )
}

export default Uncontrolled

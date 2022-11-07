import React from 'react'
import {useNavigate} from 'react-router-dom'

function OrederSummary() {
    const navegate = useNavigate()
  return (
    <div>
      <p style={{textAlign:"center"}}>Order Confimed !</p>
      <button onClick={()=>navegate(-1)}>back</button>
    </div>
  )
}

export default OrederSummary

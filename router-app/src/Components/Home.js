import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navegate = useNavigate()
  return (
    <div>
      <p style={{textAlign:"center"}}>Home page</p>
      <button onClick={()=>navegate('order-summary' , {replace: true})}>place order</button>
    </div>
  )
}

export default Home

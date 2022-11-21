import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>this is product Page</h1>
      <button onClick={()=>navigate('/order')}>Place Order</button>
    </div>
  )
}

export default Product


//useNavigate is used in internal navigation
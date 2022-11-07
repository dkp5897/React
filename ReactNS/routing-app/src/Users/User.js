
import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function User() {
    // const {details} = useParams()
    const input  = useLocation()

    useEffect(()=>{
        // console.log(details);
        console.log(input);
    })

  return (
    <div>
      this is {input.pathname}Details 
    </div>
  )
}

export default User

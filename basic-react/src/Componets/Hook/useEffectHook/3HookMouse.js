
import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e)=>{
        console.log(`mouse event`)
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log(`useEffect called`)
        window.addEventListener('mousemove',logMousePosition)
    },[]) // empty array means excute only on initial render 

  return (
    <div>
      Hook: X - {x}, Y - {y}
    </div>
  )
}

export default HookMouse

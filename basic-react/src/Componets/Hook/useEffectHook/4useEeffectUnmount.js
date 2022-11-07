
import React, {useState,useEffect} from 'react'

function UseEeffectUnmount() {
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

        // component cleanup code
        return ()=>{
            console.log('component unmounting')
            window.removeEventListener('mousemove',logMousePosition)
        }

    },[]) // empty array means excute only on initial render 

  return (
    <div>
      Hook: X - {x}, Y - {y}
    </div>
  )
}

export default UseEeffectUnmount

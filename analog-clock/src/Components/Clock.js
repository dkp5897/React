import React, { useState } from 'react'
import './Clock.css'

function Clock() {

    const [hour,setHour] = useState('');
    const [minutes,setMinutes] = useState('');
    const [seconds,setSeconds] = useState('');

    setInterval(()=>{
        let date = new Date();
        let hh = date.getHours()*30,
            mm = date.getMinutes()*6,
            sc = date.getSeconds()*6

        setHour(`rotateZ(${hh+mm/2}deg)`);
        setMinutes(`roteteZ(${mm}deg)`);
        setSeconds(`roteteZ(${sc}deg)`)    
    },1000)

  return (
    <div className='clock__circle'>
      <span className="clock__twelve">12</span>
      <span className="clock__three">3</span>
      <span className="clock__six">6</span>
      <span className="clock__nine">9</span>
      
      <div className="clock__rounder"></div>
      <div className="clock__hour" style={{ transform: hour }}></div>
      <div className="clock__minutes" style={{ transform: minutes }}></div>
      <div className="clock__seconds" style={{ transform: seconds }}></div>
    </div>
  )
}

export default Clock

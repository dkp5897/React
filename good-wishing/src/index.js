
// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'


// let curDate = new Date().getHours()
// let massage = '';
// const cssStyle ={
//   fontSize: '50px',
//   textAlign : 'center'
// }

// if(curDate>=1 && curDate<12){
//   massage = 'Good Mornig';
//   cssStyle.color = 'green'
// }
// else if(curDate>=12 && curDate<19 ){
//   massage = 'Good Afternoon'
//   cssStyle.color='orange'
// }
// else{
//   massage = 'Good Night'
//   cssStyle.color='black'
// }


// ReactDOM.render(
//  <>
//   <div className='massage'>
//     <h1>Hello Sir, <span style={cssStyle}> {massage} </span> </h1>,
//   </div>
//  </>,
//   document.getElementById('root')
// )


//============================================================

// by using bdiiferent components

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

ReactDOM.render(<App/>,document.getElementById('root'))

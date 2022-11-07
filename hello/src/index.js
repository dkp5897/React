// importing react modules
//old way of imporinting

// var React = require('react');
// var ReactDOM = require('react-dom');

//morden way of importing (babel: it convert morden js to the browser supporing js)

import React from 'react';
import ReactDOM from 'react-dom';


// ReactDOM.render('what do you want to print', 'where do you want to print',callback)

// ReactDOM.render( <h1> Hello World !! How are You2. </h1>,document.getElementById('root') )



//babel show upper code like this to browser

// ReactDOM.render( 
//   React.createElement("h1",null, "Hello World !! How are You."), document.getElementById('root')
// );



// by using javascript print Hello world

// let h1 = document.createElement('h1');
// h1.innerHTML="Hello World";
// document.getElementById('root').appendChild(h1);


//=============================================================

// render method take only one element, if we want to add multiple element then we have to put them in a single div element but it will add an extra div tag (extra momory)

// ReactDOM.render(
//   <div>
//     <h1>Hello Deepak, How are you ?</h1>
//     <p>Let's enjoy react</p>
//   </div>,document.getElementById('root')
// );



// or we can use like array also [first, second, third]

// ReactDOM.render(
//   [
//     <h1>Hello Deepak, How are you ?</h1>,
//     <p>Let's enjoy react!</p>,
//     <h3>Good Mornig !</h3>
//   ],
//   document.getElementById('root')
// )




// or we can also use <React.Fragment> </React.Fragment> 

// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hello Deepak, How are you ?</h1>
//     <p>Let's enjoy react</p>
//     <h2>Too Good</h2>
//   </React.Fragment>
//   ,document.getElementById('root')
// );



// or we can use

// ReactDOM.render(
//   <>
//     <h1>Hello Deepak, How are you ?</h1>
//     <p>Let's enjoy react</p>
//     <h2>Too Good</h2>
//   </>
//   ,document.getElementById('root')
// );


//==============================================================

// chalenge-1: create an app in which there should be -

// 1.  one h1 tag 
//2.   one p tag
//3.   list of five best series

// ReactDOM.render(
//   <>
//     <h1>Challenge - 1</h1>
//     <p>My five best movies are </p>
//     <ol>
//       <li>Bahubali</li>
//       <li>Bahubali 2</li>
//       <li>Rastasan</li>
//       <li>96</li>
//       <li>KGF2</li>
//     </ol>
//   </>,
//   document.getElementById('root')
// );


// ============================================================

//wrinting expressions in JSX: we can do this by {javascript}

// const myName = "Deepak Kumar"

// ReactDOM.render(
//   <>
//     <h1>my name is {myName} </h1>
//     <p>my age is {20+5} </p>
//     <h2>The random number is {Math.floor(Math.random()*10+1)}</h2>
//   </>,
//   document.getElementById('root')
// )

//===============================================================

// template literal

// const fName = "Deepak"
// const lName = "Kumar"

// ReactDOM.render(
//   <>
//     <h1>my name is {fName +" "+lName}</h1>
//     <p>my age is {20+5} </p>
//     <h2>The random number is {Math.floor(Math.random()*10+1)}</h2>
//   </>,
//   document.getElementById('root')
// )

// by using template literals

// ReactDOM.render(
//   <>
//      {/* <h1>my name is {`${fName} ${lName}`} </h1> */}
//      <h1>{`my name is ${fName} ${lName}`} </h1>
//      <p>my age is {20+5} </p>
//      <h2>The random number is {Math.floor(Math.random()*10+1)}</h2>
//   </>,
//   document.getElementById('root')
// )


// =======================================================

// challenge - 2 : Create an app in which write your name and add today date and time

// const fname = "Deepak"
// const lname = "Kumar"

// let date = new Date().toLocaleDateString()
// let time = new Date().toLocaleTimeString()

// ReactDOM.render(
//   <>
//     <h1>{`my name is ${fname} ${lname}`}</h1>
//     <p>{`today date is:  ${date}`}</p>
//     <p>{`now time is:  ${time}`}</p>
//   </>,
//   document.getElementById('root')
// )


//==========================================================

//JSX Attributes



// const fullName = "Deepak Kumar";
// const image1 = "https://picsum.photos/200/300"
// const image2 = "https://picsum.photos/300/300"
// const image3 = "https://picsum.photos/200/300"

// const link  = "https://github.com/dkp5897" // i want to add this link with third image

// ReactDOM.render(
//   <>
//     <h1 contentEditable="true">{`My name is ${fullName}`}</h1>
//     {/* <img src='https://picsum.photos/200/300' alt='random image' /> */}
//     <img src= {image1} alt="randomimage1" />
//     <img src= {image2} alt="randomimage2" />
//     <a href= {link} target ="_dk" >
//       <img src= {image3} alt="randomimage3" />
//     </a>
//   </>,
//     document.getElementById('root')
// );



//========================================================

// adding css property
// for this we have to import our css file

// import './index.css'

// const fullName = "Deepak Kumar";
// const image1 = "https://picsum.photos/200/300"
// const image2 = "https://picsum.photos/300/300"
// const image3 = "https://picsum.photos/200/300"

// const link  = "https://github.com/dkp5897" // i want to add this link with third image

// ReactDOM.render(
//   <>
//     <h1 className='heading' >{`My name is ${fullName}`}</h1>
//     <div className='div_img'>
//       <img src= {image1} alt="randomimage1" />
//       <img src= {image2} alt="randomimage2" />
//       <a href= {link} target ="_dk" >
//         <img src= {image3} alt="randomimage3" />
//       </a>
//       <img src= {image1} alt="randomimage1" />
//       <img src= {image2} alt="randomimage2" />
//     </div>
//   </>,
//     document.getElementById('root')
// );


//==========================================================

// inline CSS

// const fullName = "Deepak Kumar";
// const image1 = "https://picsum.photos/200/300"
// const image2 = "https://picsum.photos/300/300"
// const image3 = "https://picsum.photos/200/300"

// const link  = "https://github.com/dkp5897" // i want to add this link with third image

// // making internal css object

// const heading ={
//   textAlign : 'center',
//   color : 'aqua',
//   backgroundColor : 'beige',
//   textShadow: '0px 2px 4px blue',
//   fontWeight: 'bold',
//   fontSize: '60px',
//   textTransform: 'capitalize'
// }

// ReactDOM.render(
//   <>
//     <h1 style={heading} >{`My name is ${fullName}`}</h1>
//     <img src= {image1} alt="randomimage1" />
//     <img src= {image2} alt="randomimage2" />
//     <a href= {link} target ="_dk" >
//       <img src= {image3} alt="randomimage3" />
//     </a>
//   </>,
//     document.getElementById('root')
// );





//==================================================================================

//by using components make a list of movies

// 1.  one h1 tag 
//2.   one p tag
//3.   list of five best serie


import App from "./App"

ReactDOM.render(<>
    <App/>
</>,document.getElementById('root')
);



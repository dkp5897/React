// import React from 'react'

// function FunctionClick() {

//     const clikHandler = () =>{
//         console.log("button Clicked");
//     }

//   return (
//     <div>
//       <button onClick={clikHandler}>Click</button>
//     </div>
//   )
// }

import React, { Component } from 'react'

class FunctionClick extends Component {

    clickHandler(){
        console.log("clicked button");
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}



export default FunctionClick

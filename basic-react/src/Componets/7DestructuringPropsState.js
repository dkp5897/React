
// Destructuring in paremeters
// const Destructuring = ({name,age})=>{
    
//     return(
//         <div>
//             <h1>Hello {name} your age is {age} </h1>
//         </div>
//     )
// }

// Destructuring under function body

// const Destructuring = (props)=>{
//     const {name,age} = props;
//     return(
//         <div>
//             <h1>Hello {name} your age is {age} </h1>
//         </div>
//     )
// }

// export default Destructuring


// Destructuring in class component
import React, { Component } from 'react'

class Destructuring extends Component {
  render() {
    const {name,age} = this.props;
    // const {state1,state2} = this.state;
    return (
      <div>
        <h1>Hello {name} your age is {age} </h1>
      </div>
    )
  }
}

export default Destructuring

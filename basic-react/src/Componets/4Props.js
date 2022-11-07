import React, { Component } from "react";

// const Display = (props)=>{
//     console.log(props);
//     return(
//         <div>
//             <h1>Hello {props.name} your age is {props.age} </h1>
//             {props.children}
//         </div>
//     )
// }

class Display extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name} your age is {this.props.name}{" "}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Display;

// App.js:

// function App() {
//     return (
//       <div className="App">
//         <Display name="Deepak" age="25">
//           <p>This is children Paragraph</p>
//         </Display>
//         <Display name="Pradeep" age="23">
//           <button>Action</button>
//         </Display>
//         <Display name="Rajan" age="25"/>
//       </div>
//     );
//   }

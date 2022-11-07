import {  useState } from 'react'
import ChildCoponent from './ChildCoponent'

// class ParentComponent extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          ParentName: "Parent"
//       }

//       this.greetParent = this.greetParent.bind(this)
//     }

//     greetParent(childName){
//         console.log(`Hello ${this.state.ParentName} from ${childName}`)
//     }
    
//   render() {
//     return (
//       <div>
//         <ChildCoponent greetHandler={this.greetParent}/>
//       </div>
//     )
//   }
// }


import React from 'react'

function ParentComponent() {

  const [getname ,setname] = useState("user")

  function ParentFunction(ChildName){
    setname("Parent")
    console.log(`Hello ${getname} I am Your ${ChildName}`);
  }

  return (
    <div>
      <ChildCoponent ParantHandler={ParentFunction} />
    </div>
  )
}

// export default ParentComponent


export default ParentComponent

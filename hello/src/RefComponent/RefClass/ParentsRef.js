import React, { Component } from 'react'
import ChildRef from './ChildRef'

class ParentsRef extends Component {
    constructor() {
        super()
        this.pRef = React.createRef()
    }

    ClickHandler=()=>{
        this.pRef.current.InputFocus()
    }

  render() {
    return (
      <div>
        <ChildRef ref={this.pRef}/>
        <button onClick={this.ClickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default ParentsRef

import React, { Component } from 'react'
import ChildInput from './ChildInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.pRef = React.createRef();
    }

    clickHandler=()=>{
        this.pRef.current.focus();
    }

  render() {
    return (
      <div>
        <ChildInput ref={this.pRef}/>
        <button onClick={this.clickHandler} >Focus Click</button>
      </div>
    )
  }
}

export default FRParentInput

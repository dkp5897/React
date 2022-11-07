import React, { Component } from 'react'

class FirstRef extends Component {
    constructor() {
        super()
        this.myref = React.createRef();
    }

    componentDidMount(){
        this.myref.current.focus()
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.myref} />
      </div>
    )
  }
}

export default FirstRef

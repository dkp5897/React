//constructor():-

// constructor() method is called when the component is initiated and it’s the best place to initialize our state. The constructor method takes props as an argument and starts by calling super(props) before anything else.

import React, { Component } from 'react'

class Constructor extends Component {
    constructor(props){
        super(props)
        this.state={
            massage : "This is constructor method"
        }
    }
  render() {
    return (
      <div>
        {this.state.massage}
      </div>
    )
  }
}

export default Constructor

// Here name is our initial state inside our constructor method and then we are calling our initial state to render method using this.state.name. The following code will output This is a Constructor Method .
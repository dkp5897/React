// This lifecycle method is used when you want your state or props to update or not. This method returns a boolean value that specifies whether rendering should be done or not. The default value is true.

import React, { Component } from 'react'

export default class ShouldComponentUpdateMethod extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'shouldComponentUpdate Method'
    }
  }
  shouldComponentUpdate() {
    return false; //Change to true for state to update
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({name: "componentDidMount Method"})
    }, 5000)
  }
  render() {
    return (
      <div>
       <p>This is a {this.state.name}</p>
      </div>
    )
  }
}

// In the above example, you will notice that first I have initialized the name state inside the constructor method and after that changed state using setState inside componentDidMount method. So basically the name state should be changed from "shouldComponentUpdate Method" to “componentDidMount Method” after 5 seconds but it didn’t change because of shouldComponentUpdate set to false, If you change that true the state will be updated.
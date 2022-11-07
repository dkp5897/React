// getDerivedStateFromProps():-

// The getDerivedStateFromProps method is called right before rendering the element in our DOM. It takes props and state as an argument and returns an object with changes to the state.

import React, { Component } from 'react'

class GetDerivedStateFromProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         massage : "This is constructor method"
      }
    }

    static getDerivedStateFromProps(props , state){
        return {massage : props.msg}
    }
    
  render() {
    return (
      <div>
        {this.state.massage}
      </div>
    )
  }
}

export default GetDerivedStateFromProps


// In the above code, I have initialized some state in the constructor method inside our ChildComponent. After that, I have called that ChildComponent inside getDerivedStateFromPropsMethod which is the parent component and passed data (nameFromParent) from there to our ChildComponent. Now ChildComponent has nameFromParent props and now, we are changing our initial state of name inside the constructor method to props which we are receiving in getDerivedStateFromProps. The following code will output This is a getDerivedStateFromProps Method.
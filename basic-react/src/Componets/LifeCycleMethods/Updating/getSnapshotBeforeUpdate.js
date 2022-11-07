// This method is called right before updating the DOM. It has access to props and state before the update. Here you can check what was the value of your props or state before its update. So let see how it works.

// Note: componentDidUpdate() should be included otherwise you will get an error.

import React, { Component } from 'react'

export default class GetSnapshotBeforeUpdateMethod extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: 'constructor Method'
        }
      }

      componentDidMount(){
        setTimeout(() => {
          this.setState({name: "componentDidMount Method"})
        }, 5000)
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('previous-state').innerHTML = "The previous state was " + prevState.name
      }
      componentDidUpdate() {
        document.getElementById('current-state').innerHTML = "The current state is " + this.state.name
      }
    render() {
        return (
            <>
               <h5>This is a {this.state.name}</h5>
                <p id="current-state"></p>
                <p id="previous-state"></p>
            </>
        )
    }
}


// In the above example, we initialized our name state as constructor Method after that changed that using setState in componentDidMount method to componentDidMount Method . So my previous state was constructor Method and the current state is componentDidMount Method So now I can get my previous State from the getSnapshotBeforeUpdate method. So using the getSnapshotBeforeUpdate method I have printed my previous state to our DOM using document.getElementById(‘previous-state’).innerHTML = “The previous state was “ + prevState.name.
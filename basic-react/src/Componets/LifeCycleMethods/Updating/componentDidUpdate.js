// The componentDidUpdate method is called after the component is updated in the DOM. This is the best place in updating the DOM in response to the change of props and state.

import React, { Component } from 'react'

export default class ComponentDidUpdateMethod extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'from previous state'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({name: "to current state"})
          }, 5000)
    }
    componentDidUpdate(prevState){
        if(prevState.name !== this.state.name){
            document.getElementById('statechange').innerHTML = "Yes the state is changed"
        }
    }
    render() {
        return (
            <div>
                State was changed {this.state.name}
                <p id="statechange"></p>
            </div>
        )
    }
}

// In the above example, our initial name state was from previous state and after that using setState, I have set the name state to to current state So React will render the name state from State was changed from previous state to State was changed to current state after 5 seconds. Using the conditional checking of the current state with the previous state prevState.name !== this.state.name inside the componentDidUpdate method, we are updating the value of the id statechange to Yes the state is changed .

// Note: You may also call setState inside componentDidUpdate but you must wrap that in a condition like in the example above or it’ll cause an infinite loop.
// componentDidMount():-

// The most common and widely used lifecycle method is componentDidMount. This method is called after the component is rendered. You can also use this method to call external data from the API.

import React, { Component } from 'react'

class ComponentsDidmount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         massage : ' this will change in 5 second '
      }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                massage : 'componentDidMount render in every 5 seconds'
            })
            console.log(this.state.massage)
        },5000)
    }

    
    render() {
    return (
      <div>
        {this.state.massage}
      </div>
    )
  }
}

export default ComponentsDidmount

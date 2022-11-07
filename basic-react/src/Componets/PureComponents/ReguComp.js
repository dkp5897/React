
import React, { Component } from 'react'

class ReguComp extends Component {
  render() {
    console.log('regular componenets')
    return (
      <div>
        Regular Components {this.props.name}
      </div>
    )
  }
}

export default ReguComp

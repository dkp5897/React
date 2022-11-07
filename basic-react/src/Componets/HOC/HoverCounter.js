import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    render() {
    const {count , IncrementCounert} = this.props
    return (
      <div>
        <h1 onMouseOver={IncrementCounert}> hover {count} times </h1>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter,5)

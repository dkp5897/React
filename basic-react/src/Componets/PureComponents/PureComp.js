
import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('pure compnents')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp


// pure component while preventing uneccessary re-render can give our code boost at certain sinario

//we can create a componenet by extending the Purecomponent class
//a pure components implements the shouldComponentUpdate lifecycle method by performing a shallow comperision on the props and state of the compnent
//if there is no difference the component is not re-renderd ->performance boost

//It is good idea to make sure that all child components are also to avoid unexpected behavior.
//Never mutete the state. Always return a new object that relfect the new state

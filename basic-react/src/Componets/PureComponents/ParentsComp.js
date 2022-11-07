
import React, { Component } from 'react'
import PureComp from './PureComp'
import ReguComp from './ReguComp'

class ParentsComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Deepak"
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Deepak"
            })
        },2000)
    }
    

  render() {
    console.log('****** Parents components *******')
    return (
      <div>
        Parents Components
        <ReguComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentsComp

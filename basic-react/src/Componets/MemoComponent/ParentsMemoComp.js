
import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentsMemoComp extends Component {

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
    console.log('** Parents Memo components **')
    return (
      <div>
        Parents Components
       <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentsMemoComp

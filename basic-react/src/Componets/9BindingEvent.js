import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         massage:"Hello"
      }

      // method-3 : binding in construtor (reccomded by react)
    //   this.clikcHandler = this.clikcHandler.bind(this);
    }
    
    // clikcHandler(){
    //     this.setState({
    //         massage:"How are You ?"
    //     })

    //     console.log(this); //undefined
    //     // since this keyward is undefined in an eventHandler that's why we need event binding in class component
    // }

    //method-4:(reccomded)

    clikcHandler = () =>{
        this.setState({
            massage:"How are You ?"
        })
    }

    // there are different methods of bindind--->
    //1.    binding in the render methods 
    //2.    callback in render methods
    //3.    binding in constructor method
    //4.    arrow function in the class instead of normal function
  render() {
    return (
      <div>
        <h1>{this.state.massage}</h1>
        {/* <button onClick={this.clikcHandler.bind(this)}>click</button> */}
        {/* <button onClick={()=> this.clikcHandler()}>click</button> */}
        <button onClick={this.clikcHandler}>click</button>
      </div>
    )
  }
}

export default EventBind

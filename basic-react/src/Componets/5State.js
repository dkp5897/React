import React, { Component } from 'react'

class Welcome extends Component{
    constructor() {
        super()
        this.state={massage:"Welcome Friend"}
    }

    clikHandler = ()=>{
        console.log("clik");
        this.setState({massage:"Thank You for clicking"})
    }

    render(){
        return(
            <div>
                <h1>{this.state.massage}</h1>
                <button onClick={()=>this.clikHandler()}>Click Here</button>
            </div>
        )
    }
}

export default Welcome;
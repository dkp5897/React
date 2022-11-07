//If-else
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }

  render() {
    // if else condition cannot be applied inside the jxs
    // if (this.state.isLoggedin) {
    //   return <h1>Welcome Deepak</h1>;
    // } else {
    //   return <h1>Welcome Guest</h1>;
    // }

    // Method -2
    // let massage
    // if(this.state.isLoggedin){
    //     massage = "Welcome Deepak"
    // }else{
    //     massage = "Welcome Guest"
    // }
    // return(
    //     <h1>{massage}</h1>
    // )

    // Method -3 :Ternary operator

    // return this.state.isLoggedin ? (
    //   <h1>Welcome Deepak</h1>
    // ) : (
    //   <h1>Welcome Deepak</h1>
    // );


        //ShortCircuit operator
    return this.state.isLoggedin && <h1>Welcome Deepak</h1>    
  }
}

export default UserGreeting;

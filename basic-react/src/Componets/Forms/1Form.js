import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: "",
      Comments: "",
      Topic:"react"
    };
  }

  changeHandler = (event) => {
    this.setState({
      UserName: event.target.value,
    });
  };

  changeCommentsHandler = (event) => {
    this.setState({
      Comments: event.target.value,
    });
  };

  changeTopicHandler = (event)=>{
    this.setState({
        Topic: event.target.value
    })
  }

  submitHandler = event =>{
    alert(`${this.state.UserName} ${this.state.Comments} ${this.state.Topic}`)
    event.preventDefault()
  }

  render() {
    // instead of this.state we can use these variables
    const {UserName, Comments, Topic} = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>UserName:</label>
          <input
            type="text"
            value={UserName}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <label>comments:</label>
          <textarea
            value={Comments}
            onChange={this.changeCommentsHandler}
          ></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={Topic} onChange={this.changeTopicHandler} >
                <option value="react">React</option>
                <option value="javacript">JavaScript</option>
                <option value="java">Java</option>
            </select>
        </div>
        <button type="submit" >Submit</button>
      </form>
    );
  }
}

export default Form;

// since form is regular HTML, it is not a react controlled component so to convert it into a controlled componet we need two steps:-
//1.    state: so that we can control the value into input field

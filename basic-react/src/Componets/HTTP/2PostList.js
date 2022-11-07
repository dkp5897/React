import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  submitHadler=(e)=>{
    e.preventDefault()
    console.log(this.state) // this will show the input data in console 
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then((response)=> console.log(response))
    .catch((error)=>{console.log(error)})
  }

  render() {
    // destructuring
    const { userId, title, body } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            name="userId"
            value={userId}
            placeholder='userId'
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            placeholder='title'
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={body}
            placeholder='body'
            onChange={this.changeHandler}
          />
        </div>
        <button onClick={this.submitHadler}>submit</button>
      </div>
    );
  }
}

export default PostList;

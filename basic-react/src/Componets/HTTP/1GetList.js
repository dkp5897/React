
import React, { Component } from 'react'
import axios from "axios"

class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         errorMassage:""
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response)    // response is an object which have some methids like data,config etc
            console.log(response.status) 
            console.log(response.headers)  
            console.log(response.data)
            this.setState({posts:response.data})       // response.data is an array of 100 elemets
        })
        .catch((error)=>{
            console.log(error)
            this.setState({errorMassage:"Error Retreiving Data"})
        })
    }
    
  render() {
    // destructuring the data
    const {posts,errorMassage} =this.state
    return (
      <div>
        List of posts
        {
            posts.length ? 
            posts.map((post)=> <div key={post.id}>{post.title}</div>):
            null
        }
        {errorMassage ? <div>{errorMassage}</div>: null}
      </div>
    )
  }
}

export default GetList

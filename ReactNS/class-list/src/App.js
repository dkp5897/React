
import React, { Component } from 'react'
import Form from './Form/Form'
import Table from './Table/Table'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       list:[],
       form:{
        name:'',
        amount:''
       }
    }
  }

  //getting data api call with axios

  // getData = ()=>{
  //   axios.get('http://localhost:3000/classproduct')
  //   .then((response)=>{
  //     // console.log(response.data)
  //     this.setState({list:response.data})
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // }

  getData = async ()=>{
    try {
      let result  = await axios.get('http://localhost:3000/classproduct')
      this.setState({list:result.data})
    } catch (error) {
      console.log(error)
    }
  }

  // for one time fetch the data
  componentDidMount(){
    // alert('yes')
    this.getData()
  }

  changeHandler = (event) =>{
    this.setState({
      form:{
        ...this.state.form,[event.target.name]:event.target.value
      }
    })
  }

  static getDerivedStateFromProps (state,props){
    console.log(state,props);
    return true
  }

  submitHandler = async (event) =>{
    try {
      event.preventDefault();
      // console.log(this.state.form)
      let postResult = await axios.post('http://localhost:3000/classproduct',this.state.form) // psotint data
      // console.log(postResult)
      this.getData() // calling getData again to fetch updated data
    } catch (error) {
      
    }
  }
  
  render() {
    return (
      <div>
        <Form submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
       {this.state.list && this.state.list.length && <Table list={this.state.list}/>} 
      </div>
    )
  }
}

export default App

import React from "react";

// function Component (){
//     return(
//         <h1>
//             Hello Deepak
//         </h1>
//     )
// }

// const Component = () => <h1>Hello Pradeep</h1>

// class Component extends React.Component{

//     render(){
//         return(
//             <h1>Hello World</h1>
//         )
//     }
// }

// const Component = () =>{
//     // return(
//     //     <h1>Hello DK</h1>
//     // )

//   return  React.createElement(
//         'div',
//         {className:"heading"},
//         "Welcome Deepak",
//         React.createElement('h1',null,"Weclome Pradeep")
//     )
// }

// const Component =({data, array})=>{
//     // const {data,array} = props.
//     const [banana , apple, mango] = array
//     console.log(data)
//     return(
//         <div>
//             {/* <h1>Hello {props['data']['name']} your age is {props.data.age} your sailary is {props.data.sailary}</h1> */}
//             <h1>Hello {data['name']} your age is {data.age} your sailary is {data.sailary}</h1>
//             {array.map((ele,index)=>{
//                 return(
//                     <h2 key={index} >{ele}</h2>
//                 )
//             })}
//             <h4>{banana}</h4>
//         </div>
//     )
// }

// ================================================================

// class Component extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       massage: 0,
//       number: 0,
//     };
//   }
//   clickHandler = () =>{
//       this.setState({
//           ...this.state,
//           massage:this.state.massage+1,
//           number: this.state.number+10
//       },()=> console.log(this.state.number))

//       console.log(this.state.massage)
//   }

//   clickHandler = () => {
//     this.setState(
//       (preveousState) => ({
//         massage: preveousState.massage + 2,
//         number: preveousState.number + 4,
//       }),
//       () => {
//         console.log(this.state.massage);
//       }
//     );
//   };

//   IncreamentFive(){
//     this.clickHandler()
//     this.clickHandler()
//     this.clickHandler()
//     this.clickHandler()
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.massage} </h1>
//         <h1>{this.state.number} </h1>
//         <button onClick={()=>this.IncreamentFive()}>click</button>
//       </div>
//     );
//   }
// }

// ========================================================================

// class Component extends React.Component{

//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//         // this.clickHandler= this.clickHandler.bind(this)
//     }

//     clickHandler = ()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }



//     render(){
//         return(
//             <>
//                 <button onClick={this.clickHandler.bind(this)} >clicked {this.state.count} times</button>
//                 <button onClick={()=> this.clickHandler()} >clicked {this.state.count} times</button>
//                 <button onClick={this.clickHandler}>clicked {this.state.count} times</button>
//                 <button onClick={this.clickHandler}>clicked {this.state.count} times</button>
//             </>
//         )
//     }
// }
// =======================================================================

class Component extends React.Component{

    constructor(){
        super()
        this.state={
            hasError : false
        }
    }

    static getDerivedStateFromError(erorr){
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

    render(){
        if(this.state.hasError){
            return(<h1>Somthing went wrong</h1>)
        }
        return this.state.children
    }
}


export default Component;

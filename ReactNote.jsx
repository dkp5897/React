

1.	What is React?
	React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page 
	applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer 
	working for Facebook. React was first deployed on Facebook News Feed in 2011 and on Instagram in 2012.


2.	What are the major features of React?
	The major features of React are:

(1)	It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
(2)	Supports server-side rendering.
(3)	Follows Unidirectional data flow or data binding.
(4)	Uses reusable/composable UI components to develop the view.


3.	What is JSX?
	JSX is a syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar 
	for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.

	In the example below text inside <h1> tag is returned as JavaScript function to the render function.

	class App extends React.Component {
	  render() {
	    return(
	      <div>
	        <h1>{'Welcome to React world!'}</h1>
	      </div>
	    )
	  }
	}



4.	What is the difference between Element and Component?
	An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. 
	Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never 
	mutated.


	The object representation of React Element would be as follows:

	const element = React.createElement(
	  'div',
	  {id: 'login-btn'},
	  'Login'
	)


	The above React.createElement() function returns an object:

	{
	  type: 'div',
	  props: {
	    children: 'Login',
	    id: 'login-btn'
	  }
	}


	Whereas a component can be declared in several different ways. It can be a class with a render() method or it can be defined 
	as a function. In either case, it takes props as an input, and returns a JSX tree as the output:

	const Button = ({ onLogin }) =>
  	<div id={'login-btn'} onClick={onLogin}>Login</div>



  					Elements																Component
	An element is always gets returned by a component.				A component can be functional or a class that optionally takes 
																	input and returns an element.

	The element does not have any methods.							Each component has its life cycle methods.

	A React element is an object representation of a DOM node.		A component encapsulates a DOM tree.

	Elements are immutable i,e once created cannot be changed.		The state in a component is mutable.

	An element can be created using React.createElement( ) 			A component can be declared in different ways like
	with type property.	 											it can be an element class with render() method or can be defined 
																	as a function.

	We cannot use React Hooks with elements as elements are 		React hooks can be used with only functional components
	immutable.	

	Elements are light, stateless and hence it is faster.			It is comparatively slower than elements.





5.	How to create components in React?
	There are two possible ways to create a component.

	Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props 
	object as the first parameter and return React elements:

	function Greeting({ message }) {
	  return <h1>{`Hello, ${message}`}</h1>

	}

	Class Components: You can also use ES6 class to define a component. The above function component can be written as:

	class Greeting extends React.Component {
	  render() {
	    return <h1>{`Hello, ${this.props.message}`}</h1>
	  }
	}



6.	When to use a Class Component over a Function Component?
	If the component needs state or lifecycle methods then use class component otherwise use function component. However, 
	from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only 
	available in class component right in your function component. *So, it is always recommended to use Function components, 
	unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries *


7.	What is state in React?
	State of a component is an object that holds some information that may change over the lifetime of the component. We should 
	always try to make our state as simple as possible and minimize the number of stateful components.

	Lets create a user component with message state,	


	import React from "react";

	class Display extends React.Component {
	  constructor() {
	    super();
	    this.state = {
	      massage: "Hello Deepak"
	    };
	  }

	  changeHandler = () => {
	    this.setState({
	      massage: "Welcome Deepak"
	    });
	  };

	  render() {
	    return <h1 onClick={() => this.changeHandler()}>{this.state.massage} </h1>;
	  }
	}

	export default Display;

	State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other 
	component till the owner component decides to pass it.


8.	What are props in React?
	Props are inputs to components. They are single values or objects containing a set of values that are passed to components on 
	creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child 
	component.

	The primary purpose of props in React is to provide following component functionality:

(1)	Pass custom data to your component.
(2)	Trigger state changes.
(3)	Use via this.props.reactProp inside components render() method.


9.	What is the difference between state and props?
	Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, 
	they are different in their functionality with respect to component. Props get passed to the component similar to function 
	parameters whereas state is managed within the component similar to variables declared within a function.


10.	Why should we not update the state directly?
	If you try to update the state directly then it would not re-render the component.

	//Wrong
	this.state.message = 'Hello world'
	Instead use setState() method. It schedules an update to a components state object. When state changes, the component 
	responds by re-rendering.

	//Correct
	this.setState({ message: 'Hello World' })
	Note: You can directly assign to the state object either in constructor or using latest javascripts class field declaration 
	syntax.	


11.  What is the purpose of callback function as an argument of setState()?
	The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the 
	callback function is used for any post action.

	Note: It is recommended to use lifecycle method rather than this callback function.

	setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))


12.	What is the difference between HTML and React event handling?
	Below are some of the main differences between HTML and React event handling,

	(i)	In HTML, the event name usually represents in lowercase as a convention:

		<button onclick='activateLasers()'>
		Whereas in React it follows camelCase convention:

		<button onClick={activateLasers}>
	(ii)	In HTML, you can return false to prevent default behavior:

		<a href='#' onclick='console.log("The link was clicked."); return false;' />
		Whereas in React you must call preventDefault() explicitly:

		function handleClick(event) {
		  event.preventDefault()
		  console.log('The link was clicked.')
		}
	(iii)	In HTML, you need to invoke the function by appending () Whereas in react you should not append () with the function name. 
		(refer "activateLasers" function in the first point for example)



13.	How to pass a parameter to an event handler or callback?
	You can use an arrow function to wrap around an event handler and pass parameters:

	<button onClick={() => this.handleClick(id)} />
	This is an equivalent to calling .bind:

	<button onClick={this.handleClick.bind(this, id)} />
	Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function

	<button onClick={this.handleClick(id)} />
	handleClick = (id) => () => {
	    console.log("Hello, your ticket number is", id)
	};


14.	What are synthetic events in React?
	SyntheticEvent is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, 
	including stopPropagation() and preventDefault(), except the events work identically across all browsers.



15.	What are inline conditional expressions?
	You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. 
	Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by 
	JS logical operator &&.	

	function Condition() {
	  let num = 10;
	  return (
	    <div>
	      {num>5 ? (
	        <h1>Greater Than 5</h1>
	      ):(
	        <h1>Less than 5</h1>
	      )}

	      {num > 5 && <h1>Greater than 5</h1>}
	      {num < 5 && <h1>Lass than 5</h1>}
	    </div>
	  );
	}

	export default Condition;



16.	What is "key" prop and what is the benefit of using it in arrays of elements?
	A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which 
	items have changed, are added, or are removed.

	Most often we use ID from our data as key:

	const todoItems = todos.map((todo) =>
	  <li key={todo.id}>
	    {todo.text}
	  </li>
	)

	When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:


	function Array(){
	  const arr = ['red','blue','green','yellow'];
	  // const item = arr.map((data,index)=><li key={index}>{arr[index]}</li>)
	  return(
	    <div>
	     {arr.map((data,index)=>{
	       return(<h1 id={index}>{data} </h1>)  
	     })}
	    </div>
	  )
	}

	export default Array



17.	What is the use of refs?
	The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when 
	you need a direct access to the DOM element or an instance of a component.	


18.	How to create refs?
	There are two approaches:-

(1)	This is a recently added approach. Refs are created using React.createRef() method and attached to React elements via the ref 
	attribute. In order to use refs throughout the component, just assign the ref to the instance property within constructor.	

(2)	You can also use ref callbacks approach regardless of React version. For example, the search bar components input element is 
	accessed as follows

	import React from "react"

	class RefDemo extends React.Component{
	  constructor(){
	    super()
	    // method -1
	    this.myrefs = React.createRef();
	    //method-2
	    this.cbRef=null;
	    this.setcbRef=(element)=>{
	      this.cbRef=element
	    }
	  }

	  componentDidMount(){
	    // this.myrefs.current.focus()
	    // console.log(this.myrefs);

	    if(this.cbRef){
	      this.cbRef.focus()
	    }
	  }

	  clickHandler = ()=>{
	    alert(this.myrefs.current.value)
	  }

	  render(){
	    return(
	      <div>
	        fname:<input type="text" ref={this.myrefs} />
	        lname:<input type="text" ref={this.setcbRef} />
	        <button onClick={this.clickHandler}>click</button>
	      </div>
	    )
	  }
	}

	export default RefDemo


	You can also use refs in function components using closures. Note: You can also use inline ref callbacks even though it is not a 
	recommended approach.	


19. What are forward refs?
	Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child.

	//ParentsRef.js

	import React, { Component } from 'react'
	import ChildInput from './ChildInput'

	class FRParentInput extends Component {
	    constructor(props) {
	        super(props)
	        this.pRef = React.createRef();
	    }

	    clickHandler=()=>{
	        this.pRef.current.focus();
	    }

	  render() {
	    return (
	      <div>
	        <ChildInput ref={this.pRef}/>
	        <button onClick={this.clickHandler} >Focus Click</button>
	      </div>
	    )
	  }
	}

	export default FRParentInput




	// ChildRef

	import React from "react";

	// function ChildInput() {
	//   return (
	//     <div>
	//       <input type="text"/>
	//     </div>
	//   )
	// }

	const ChildInput = React.forwardRef((props,ref) => {
	    return (
	      <div>
	        <input type="text" ref={ref} />
	      </div>
	    );
	  });

	export default ChildInput;


20.	What is Virtual DOM?

	React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). 
	So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, 
	but it does not have the power to directly change the layout of the document. 

	Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen.
	So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. 

	How Virtual DOM actually make things faster:- When anything new is added to the application, a virtual DOM is created and it is 
	represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of 
	any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree 
	and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the 
	updated elements will get rendered on the page again.

	This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. Once React finds out what 
	exactly has changed then it updated those objects only, on real DOM. 


21. What is the difference between Shadow DOM and Virtual DOM?
	The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a 
	concept implemented by libraries in JavaScript on top of browser APIs.	


22. What is “React Fiber”?

	 React Fiber is a concept of ReactJS that is used to render a system faster and smoother. React is one of the popular JavaScript 
	 library used to create a responsive user interface. React makes coding simple as compared to other frameworks. After certain 
	 changes who is the next element to render the system called reconciler. This algorithm helps to compare two DOM trees and diff 
	 them. React fiber helps to do it better.	

	 Goals of React Fiber: Fiber focuses on animations and responsiveness. It has the ability to split work into chunks and 
	 prioritize tasks. We can pause work and come back to it later. We can also reuse previously completed work or maybe abort it 
	 if it is not needed. As opposed to the old React reconciler, it is asynchronous.
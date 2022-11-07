// Introducing Error Boundaries

// A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.

// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

// A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.

// Note:-
// Error boundaries do not catch errors for:

//1.   Event handlers (learn more)
//2.   Asynchronous code (e.g. setTimeout or      requestAnimationFrame callbacks)
//3.   Server side rendering
//4.   Errors thrown in the error boundary itself (rather than its children)

// Error boundaries work like a JavaScript catch {} block, but for components. Only class components can be error boundaries.

// Note that error boundaries only catch errors in the components below them in the tree. An error boundary can’t catch an error within itself.

import React, { Component } from 'react'

class ErrorBoundry extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    

    static getDerivedStateFromError(error){
        return{
            hasError : true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

  render() {
   if(this.state.hasError){
    return(<h1>Somthing went wrong</h1>)
   }
   return this.props.children
  }
}

export default ErrorBoundry


// in app.js

{/* <div className="App">
<ErrorBoundry>
  <Hero heroName="Batman" />
</ErrorBoundry>

<ErrorBoundry>
  <Hero heroName="Superman" />
</ErrorBoundry>

<ErrorBoundry>
  <Hero heroName="Joker" />
</ErrorBoundry>
</div> */}
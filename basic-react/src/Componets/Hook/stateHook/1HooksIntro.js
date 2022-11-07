// What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.

//Hooks are a new features addition in React version 16.8 which allow you to use React features without having to write class.
// Hooks don't work inside classes 

// why Hooks:-
// avoid confusion of this keywords
//1.     binding in class component
//2.    There is no particular way to reuse stateful component in class
        //HOC and render props pattern do address this problem which is very complex

//3.    Create component for complex scenarios such as data fetching and suscribing events Related code is not orgenised in one place

//Ex.: data fetching:- componenDidMount and componentDidUpdate methods used
//Ex.: Events Listeners:- componentDidMount and componentWillUnmount


// summary:-

//The usestate hook lets you add state in functional component
//In classes the state is always object
//with the useState hook, the state doesn't to be object
//the useState hook return an array with two elements 
//the first elemnt is the current value of the object and the second element is the state setter function.
//new state value depends on the previous state value? You can pass a function to a stter function.
//When dealings with object or arrays, make sure to spread your state variable and then call the setter function

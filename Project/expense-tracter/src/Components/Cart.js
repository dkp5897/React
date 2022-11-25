import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import CartContext from "./CartContext";
import {products} from './Products'
import { initialState,reducer } from "./Reducer";

export const UserContext = createContext()

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const removeItem = (id,title) =>{
    alert(`${title} will be remove from Shopping cart`);
    dispatch({type: 'REMOVE_ITEM', payload: id})
  }

  const clear_All = () =>{
    alert('Do You want to detele all the items from Shopping cart')
    dispatch({type:'CLEAR_ALL'})
  }

  const increament = (id) =>{
    // alert(id)
    dispatch({type:'INCREMENT',payload:id})
  }

  const decrement = (id) =>{
    // alert(id)
    dispatch({type:'DECREMENT',payload:id})
  }

  useEffect(()=>{
    dispatch({type:'GET_TOTAL'});
    // console.log("change");
  },[state.items])

  return (
    <UserContext.Provider value={{...state,removeItem,clear_All,increament,decrement}}>
      <CartContext/>
    </UserContext.Provider>
  );
};

export default Cart;

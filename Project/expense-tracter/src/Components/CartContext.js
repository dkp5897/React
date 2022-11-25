import React from 'react'
import { useContext } from 'react';
import { UserContext } from './Cart';
import "./Cart.css";
import Items from "./Items";




const CartContext = () => {
    const {items,totalItem,totalAmount,clear_All} = useContext(UserContext)
    // console.log(items)
  return (
    <>
      <header>
        <div className="logo-box">
          <img src="./Back.png" alt="logo" />
          <h3 className="company">Continue Shopping</h3>
        </div>
        <div className="shopping-cart">
          <img src="./shopping-cart.png" alt="cart-img" />
          <p className="shopping-count">{totalItem}</p>
        </div>
      </header>
      <div className="main-box">
        <div className="main-info">
          <h1>Shopping Cart</h1>
          <p>You have added <span>{totalItem}</span> items in Shopping Cart</p>
        </div>
        <div className="items">
          {items.map((item)=>{
            return <Items key={item.id} {...item}/>
          })}
        </div>
      </div>
      <div className="total">
        Total Cost : <span>{totalAmount}</span>
        <button onClick={clear_All}>Clear Cart</button>
      </div>
    </>
  )
}

export default CartContext

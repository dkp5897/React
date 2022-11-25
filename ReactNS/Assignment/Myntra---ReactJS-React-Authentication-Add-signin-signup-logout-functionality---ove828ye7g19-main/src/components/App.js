import React from 'react'
import '../styles/App.css';
import logo from '../icon.jpeg'
import cart  from '../shopping-cart-solid.svg'
const App = () => {

  return (
    <div id="main">
      <nav>
        <div className='icon-holder'>
          <img src={logo}/>
        </div>
        <div id='product-tile-holder'>
          <input type='text'/>
        </div>
        <div className='cart-holder'>
          {cart}
        </div>
      </nav>
    </div>
  )
}


export default App;

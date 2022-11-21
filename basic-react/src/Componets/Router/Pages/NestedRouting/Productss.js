import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Productss() {
  return (
    <>
    <div>
      <h1>This is Product Page</h1>
      <input type="search" placeholder='Search Products' />
    </div>
    <nav className='nested'>
        <Link to='features'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Productss


// don't use forward slace '/' for nested rout

//If we want that, anyone click on nested Products then our feayured products show by default at same url then we use index routing.
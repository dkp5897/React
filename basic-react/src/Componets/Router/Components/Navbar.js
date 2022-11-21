
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Router.css'

const Navbar = () => {

  const navLinkStyles = ({isActive}) =>{
    return{
      fontWeight:isActive? 'bold' : 'normal',
      textDecoration : isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav className='primary'>
        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        <NavLink style={navLinkStyles} to='/contact'>ContactUs</NavLink>
        <NavLink style={navLinkStyles} to='/product'>Products</NavLink>
        <NavLink style={navLinkStyles} to='/productss'>Nested Products</NavLink>
    </nav>
  )
}

export default Navbar


//instead Link use NavLink to use active link calss
import React from "react";
import '../App.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand h1">Navbar</span>
      </nav>
        <div className="btnStyle">
          <button className="btn btn-outline-warning" type="button">
            <NavLink to='/'> Back </NavLink>
          </button>
          <button className="btn btn-outline-success " type="button">
            <NavLink to='/form'>Add+</NavLink>
          </button>
        </div>
    </div>
  );
}

export default Navbar;

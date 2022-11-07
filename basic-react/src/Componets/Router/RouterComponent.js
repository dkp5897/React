import React from 'react'
import About from './About'
import ContactUs from './ContactUs'
import Home from './Home'
import {BrowserRouter as Router, Link, Route, Routes,} from 'react-router-dom'

function RouterComponent() {
  return (
    <Router>
        <div className='App'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>ContactUs</Link>
                </li>
            </ul>
        </div>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/contact' element={<ContactUs/>}></Route>
        </Routes>
    </Router>
  )
}

export default RouterComponent

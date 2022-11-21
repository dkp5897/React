import React from 'react'
import About from '../Pages/About'
import ContactUs from '../Pages/ContactUs'
import Home from '../Pages/Home'
import {BrowserRouter as Router, Link, Route, Routes,} from 'react-router-dom'
import Navbar from './Navbar'
import Product from '../Pages/Product'
import OrderSummary from '../Pages/OrderSummary'
import NoMatch from '../Pages/NoMatch'
import Productss from '../Pages/NestedRouting/Productss'
import FeaturesProducts from '../Pages/NestedRouting/FeaturesProducts'
import NewProducts from '../Pages/NestedRouting/NewProducts'

function RouterComponent() {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='about' element={<About/>}></Route>
            <Route exact path='contact' element={<ContactUs/>}></Route>
            <Route exact path='/product' element={<Product/>}/>
            <Route exact path='/order' element={<OrderSummary/>}/>
            <Route exact path='/productss' element={<Productss/>}>
              <Route index element={<FeaturesProducts/>}/>  {/* index routing, see the poductss page */}
              <Route path='features' element={<FeaturesProducts/>}/>
              <Route path='new' element={<NewProducts/>}/>
            </Route>

            <Route exact path='*' element={<NoMatch/>}/>
        </Routes>
    </>
  )
}

export default RouterComponent

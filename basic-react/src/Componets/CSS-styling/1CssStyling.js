// Styling ways:-

//1.    CSS stylesheet
//2.    inline styling  
//3.    CSS modules
//4.    CSS in js libraries

import React from 'react'
import "./1CssStyling.css"

function StyleSheet() {
  return (
    <div>
      <h1 className={`primary font-x`}>Hello World</h1>
    </div>
  )
}

export default StyleSheet

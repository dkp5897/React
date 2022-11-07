// Context provides a way to pass data through the componenet tree without having to pass props down manually at every level

import React from 'react'
import CompB from './CompB'

function CompA() {
  return (
    <div>
        <CompB/>
    </div>
  )
}

export default CompA

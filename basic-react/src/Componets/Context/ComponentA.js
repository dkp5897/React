// Context provides a way to pass data through the componenet tree without having to pass props down manually at every level

import React from 'react'
import ComponentB from './ComponentB'

function ComponentA() {
  return (
    <div>
      <ComponentB/>
    </div>
  )
}

export default ComponentA

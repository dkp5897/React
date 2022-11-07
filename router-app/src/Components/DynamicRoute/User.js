import React from 'react'
import {Outlet} from 'react-router-dom'

function User() {
  return (
    <div>
      <h2>user 1</h2>
      <h2>user 2</h2>
      <h2>user 3</h2>
      <Outlet/>
    </div>
  )
}

export default User

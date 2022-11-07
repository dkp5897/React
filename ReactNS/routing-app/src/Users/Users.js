
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users(props) {
  return (
    <div>
      <ul>
        {
            props.list.map((data)=>{
                return(
                    <li key={data.id}>
                        <Link to={data.fullName}>{data.fullName}</Link>
                    </li>
                )
            })
        }
      </ul>
      <Outlet/>
    </div>
  )
}

export default Users

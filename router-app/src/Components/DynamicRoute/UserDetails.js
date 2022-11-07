import React from 'react'
import {useParams} from 'react-router-dom'

function UserDetails() {
    const params = useParams();
    const useId = params.userId
  return (
    <div>
      Details about user {useId}
    </div>
  )
}

export default UserDetails

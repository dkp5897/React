
import React, { useContext } from 'react'
import {UserContexts,ChannelContext} from "./ContextValueProvider"

function CompD() {

    const consumer1 = useContext(UserContexts)
    const consumer2 = useContext(ChannelContext)

  return (
    <div>
      {consumer1} - {consumer2}
    </div>
  )
}

export default CompD

// useContext only change consumer part and make it simpler
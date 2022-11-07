import React from 'react'
import CompA from './CompA'

export const UserContexts = React.createContext()
export const ChannelContext = React.createContext()

function ContextValueProvider() {
  return (
    <div>
      <UserContexts.Provider value={'DK : Deepak Kumar'}>
        <ChannelContext.Provider value={'PK: Pradeep Kumar'}>
            <CompA/>
        </ChannelContext.Provider>
      </UserContexts.Provider>
    </div>
  )
}

export default ContextValueProvider

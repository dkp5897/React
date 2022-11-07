
import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentD() {
  return (
    <UserConsumer>
        {
            (username)=>{
                return(
                  <UserConsumer>
                    {
                      username2=>{
                        return <div>User context value {username},second User context value {username2}</div>
                      }
                    }
                  </UserConsumer>
                  )
            }
        }
    </UserConsumer>
  )
}

export default ComponentD


// means if we have two pass multiple context values then it become too complext, to remove this problem useContext come in the picture
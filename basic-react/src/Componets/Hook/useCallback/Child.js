import React, { memo } from 'react'

function Child() {
  console.log("child rendering")
  return (
    <div>
      <h1>This is child Compnent</h1>
    </div>
  )
}

export default memo(Child)

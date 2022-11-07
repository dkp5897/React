

import React from 'react'

function MemoComp(name) {
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp) // higher oreder componenets


// what pure componet do in class component same thing memo do for functional componets

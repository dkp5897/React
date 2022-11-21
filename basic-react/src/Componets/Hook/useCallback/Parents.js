import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parents() {
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)

  const increase2 = useCallback(() =>{
    console.log("counter2 increment")
  },[count2])

  return (
    <div>
      <Child count={count2} increase2={increase2}/>
      <button onClick={()=>setCount(count+1)}>count:-{count}</button>
    </div>
  )
}

export default Parents

//1.  If we click on button then our countb value is increase by one but the child component rerender on every click unnecessary because there is no change in child compnent

//2.  To stop this unnecessary rendering of child component we can use memo in child component

//3.  Now we are able to stop unnecessary rerendering of child component by using memo. But if we pass any data from parent component to child component then it will start rerendering again. Beacuse parent component rerender for every click and beacuse of the data passing from parent to child, our child componet also rerender. To stop this we have to use useCallback hook.

//4.  by using useCallback we can provide dependency so that our component will not rerender unnecessary

//5.  The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.

// The useMemo Hook only runs when one of its dependencies update.
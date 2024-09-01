
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(7);

  const clickHandler = () => {
      setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={clickHandler}>increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
              }}>
              Decrement
      </button>
    
    </>
  )
}

export default Counter;

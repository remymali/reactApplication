import React, { useState } from 'react'
function CountComponent() {
    
  let [count,setCount]=useState(0)
  function handleIncrement()
  { 
    setCount(count+1)
  }
  function handleDecrement()
  {
    
    setCount(count-1)
  }
  return (
    <div>
      <div className='counterload'>
      <h1>counter</h1>
      <button onClick={handleIncrement}>+</button>
      <p>count {count}</p>
      <button onClick={handleDecrement}>-</button>
    </div>
    </div>
  )
}

export default CountComponent

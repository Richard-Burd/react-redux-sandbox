// ClassCounter.js will accomplish the same thing as this functional component
// ...but in a class component without using hooks
import React, { useState } from 'react'

function HooksCounter() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}

export default HooksCounter

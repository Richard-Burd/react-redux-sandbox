import React, { useState, useEffect } from 'react'

function HookCounterOne() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect - Updating document title');
    document.title = `Clicked ${count} times!`
  }, [count]) // props or state you need to watch for to execute useEffect go in this array

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => {
          setName(e.target.value)
        }}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne

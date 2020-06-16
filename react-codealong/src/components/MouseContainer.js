import React, { useState } from 'react'
import HookMouse from './HookMouse'
import ClassMouse from './ClassMouse'

function MouseContainer() {
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <ClassMouse />}
    </div>
  )
}

export default MouseContainer

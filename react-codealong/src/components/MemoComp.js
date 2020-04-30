// Lesson 27 (https://www.youtube.com/watch?v=7TaBhrnPH78&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=27)

// We want s.thing like a pure component that will not rerender constantly, but for a functional
// component instead of a class component...pure components are always class components, not functional ones
import React from 'react'

function MemoComp({name}) { // created with the "rfce" snippet
  console.log('Rendering Memo Component');
  return (
    <div>
      {name}
    </div>
  )
}

// this will prevent the component from rerendering
// It is a higher order component
export default React.memo(MemoComp)

import React from 'react'

function FunctionClick() {
  function clickHandler() {
    console.log("button clicked")
  }
  return (
    <div>     {/* not "clickHandler()" - that is a call to execute the function */}
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick

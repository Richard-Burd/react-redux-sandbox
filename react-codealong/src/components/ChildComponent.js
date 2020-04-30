import React from 'react'

function ChildComponent(props) {
  // Arrow functions in the return statement are the best way to pass parameters
  // from the child component to the parent component
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>

      {/* The above way works, but now lets pass parameters from this child to the parent */}
      <button onClick={() => props.greetHandler('your child Gozlin')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent

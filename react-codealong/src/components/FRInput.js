// Lesson 30 (https://www.youtube.com/watch?v=FXa9mMTKOu8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=20)
import React from 'react';

// This stands for "Forward Refs Input"
// function FRInput() {          // made with the "rfce" snippet
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

// first we need an arrow function to do this
// const FRInput = React.forwardRef() () => {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }
// Second, Now we need to ender the output into the forwardRef's parenthesis:

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
})

export default FRInput

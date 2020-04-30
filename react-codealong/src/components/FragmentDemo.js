// Lesson 25 (https://www.youtube.com/watch?v=KDXZibVdiEI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=25)
// Fragments let you group a list of child elements w/o adding extra nodes to the DOM
// for example, when you have several unnecessary <div></div> nodes that you don't need to render,
// But React forces them upon you because the 'render' method can only return one single element

import React from 'react' // made with the "rfce" snippet

function FragmentDemo() {
  return (
    <React.Fragment>
      <h1>
        Fragment Demo
      </h1>
      <p>This descripes the Fragment Demo component</p>
    </React.Fragment>
  )
}

export default FragmentDemo

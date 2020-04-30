// Lesson 25
// Fragments let you group a list of child elements w/o adding extra nodes to the DOM
// for example, when you have several unnecessary <div></div> nodes that you don't need to render,
// But React forces them upon you because the 'render' method can only return one single element
import React from 'react'

function Columns() {  // made with the "rfce" snippet
  return (
    <React.Fragment>
      <td>Name</td>
      <td>Vishwas</td>
    </React.Fragment>
  )
}

export default Columns

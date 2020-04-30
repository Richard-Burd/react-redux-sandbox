// Lesson 25
// Fragments let you group a list of child elements w/o adding extra nodes to the DOM
// for example, when you have several unnecessary <div></div> nodes that you don't need to render,
// But React forces them upon you because the 'render' method can only return one single element
import React from 'react'
import Columns from './Columns';

function Table() { // made with the "rfce" snippet
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  )
}

export default Table

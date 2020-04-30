// Lesson 25
// Fragments let you group a list of child elements w/o adding extra nodes to the DOM
// for example, when you have several unnecessary <div></div> nodes that you don't need to render,
// But React forces them upon you because the 'render' method can only return one single element
import React from 'react'

function Columns() {  // made with the "rfce" snippet

  // React.Fragment can accept key attributes when rendering lists of items...
  // ...and you can use the "key" attribute to render them as shown in line 17 below
  const myItems = [{title: "1st Title", id: "1"}, {title: "2nd Title", id: "2"}]

  return (
    <React.Fragment>
      {
        myItems.map(item => (
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
          </React.Fragment>
        ))
      }
      <td>Name</td>
      <td>Vishwas</td>
    </React.Fragment>
  )
}

export default Columns

// NOTE: instead of using "React.fragment", you could just use a shorthand syntax
// wherein you use empty opening & closing tags like so:

/*

return (
  <>
   <p>S.thing in here</p>
  </>
)

WARNING: if you use this syntax, you cannot use the "key" attribute as shown above in line 17

*/

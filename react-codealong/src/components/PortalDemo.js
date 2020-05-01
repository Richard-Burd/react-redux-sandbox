// Lesson 31 (https://www.youtube.com/watch?v=HpHLa-5Wdys&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=31)
// React Portals allow you to render children in a DOM
// node that exists outside the hierarchy of the parent
import React from 'react';
import ReactDOM from 'react-dom'; // this is the same package as what appears in index.js

// The format to use "ReactDOM.createPortal" is:
// ReactDOM.createPortal (thing_being_rendered, DOM_node_where_it_is_to_be_rendered)
// The two parameters above are seperated by a comma.
function PortalDemo() {
  return ReactDOM.createPortal (
    <h1>
      Portals Demo
    </h1>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo

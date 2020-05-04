// Lesson 38 & 39 (https://www.youtube.com/watch?v=lTjQjWemKgE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=39)
// This workspace concearns "Context" which is an API that allows you to pass props from
// a grand parent to grand child without passing it to the intermediary generation
// Implementing context has 3 steps:
// 1.) create the context
// 2.) provide a context value
// 3.) consume the context value
import React, { Component } from 'react'
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {

  // this schema only works with class component and one context
  static contextType = UserContext

  render() {
    return (
      <div>
        Component E context: {this.context}
        <ComponentF />
      </div>
    )
  }
}

// ComponentE.contextType = UserContext
// we can replace the code above with the line farther up that says:
// "static contextType = UserContext"

export default ComponentE

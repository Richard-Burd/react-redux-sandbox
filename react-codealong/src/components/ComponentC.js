// Lesson 38 & 39 (https://www.youtube.com/watch?v=lTjQjWemKgE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=39)
// This workspace concearns "Context" which is an API that allows you to pass props from
// a grand parent to grand child without passing it to the intermediary generation
// Implementing context has 3 steps:
// 1.) create the context
// 2.) provide a context value
// 3.) consume the context value 
import React, { Component } from 'react'
import ComponentE from './ComponentE';

class ComponentC extends Component {
  render() {
    return <ComponentE />
  }
}

export default ComponentC

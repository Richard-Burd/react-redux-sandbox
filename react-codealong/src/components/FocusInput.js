// Lesson 29 (https://www.youtube.com/watch?v=FXa9mMTKOu8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=29)
// This is an implementation of what was learned in the previous lesson... see the "RefsDemo.js" file for that.

// NOTE: Refs must be attached to class components...not functional ones.

// Basically, this component and the child (Input.js) make a thing wherein clicking on a button causes
// the focus to fall on the input field.
import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {        // made with the "rce" snippet
  constructor(props) {                      // made with the "rconst" snippet
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    this.componentRef.current.focusInput()
  }


  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick ={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput

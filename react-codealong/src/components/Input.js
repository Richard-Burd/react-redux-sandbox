// Lesson 29 (https://www.youtube.com/watch?v=FXa9mMTKOu8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=29)
// This is an implementation of what was learned in the previous lesson... see the "RefsDemo.js" file for that.

// NOTE: Refs must be attached to class components...not functional ones.

// Basically, this component and the parent (FocusInput.js) make a thing wherein clicking on a button causes
// the focus to fall on the input field.
import React, { Component } from 'react'

class Input extends Component {         // made with the "rce" snippet
  constructor(props) {                  // made with the "rconst" snippet
    super(props)
    this.inputRef = React.createRef()

  }

  focusInput() {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default Input

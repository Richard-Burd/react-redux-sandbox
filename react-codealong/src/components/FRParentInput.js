// Lesson 30 (https://www.youtube.com/watch?v=FXa9mMTKOu8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=20)
import React, { Component } from 'react';
import FRInput from './FRInput'

// This stands for "Forward Refs Parent Input"
class FRParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput

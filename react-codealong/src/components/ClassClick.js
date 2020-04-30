import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler() {
    console.log('clicked the button');
  }

  render() {
    return (  // you need "this" for a class component
      <button onClick={this.clickHandler}>Click Me I'm a Class</button>
    )
  }
}

export default ClassClick

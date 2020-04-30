// Lesson 26 (https://www.youtube.com/watch?v=YCRuTT31qR0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=26)
import React, { Component } from 'react'

class RegComp extends Component { // created with the "rce" snippet
  render() {
    console.log('Reg Comp Render');
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp

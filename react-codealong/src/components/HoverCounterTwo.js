// Lesson 36 (https://www.youtube.com/watch?v=NdapMDgNhtE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=36)
// Lesson 37 (https://www.youtube.com/watch?v=EZil2OTyB4w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=37)
// This concearns Render Props which refers to a technique for sharing code between
// React components using a prop whose value is a function.
import React, { Component } from 'react'

class HoverCounterTwo extends Component {

  render() {
    const { count, incrementCount } = this.props

    return (
      <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
    )
  }
}

export default HoverCounterTwo

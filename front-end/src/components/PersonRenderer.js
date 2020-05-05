import React, { Component } from 'react'
import Person from './Person'

class PersonRenderer extends Component {
  render() {
    return (
      // <Person name={"Octavious"} age={32}/>
      <Person />
    )
  }
}

// Here we're using the defaultProps() Reactive native method
Person.defaultProps = {
  name: "Octavious",
  age: "32"
}

export default PersonRenderer

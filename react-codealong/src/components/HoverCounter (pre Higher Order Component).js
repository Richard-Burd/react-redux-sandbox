// Lesson 33 (https://www.youtube.com/watch?v=B6aNv8nkUSw&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=33)
// This is a button that counts how many times you've hovered over it with a mouse arrow.
import React, { Component } from 'react'

class HoverCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    // Since we need the previous state to increment the value, the argument to
    // setState will not be a simple object instead it takes in a function which
    // gets the previous state as a parameter and returns a new state
    // FORMAT: this.setState(previous_state => {return})
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    const { count } = this.state
    return <h2 onMouseOver={this.incrementCount}>Hovered {count} Times</h2>
  }
}

export default HoverCounter

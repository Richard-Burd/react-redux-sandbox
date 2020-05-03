// Lesson 37 (https://www.youtube.com/watch?v=EZil2OTyB4w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=37)
// This concearns Render Props which refers to a technique for sharing code between
// React components using a prop whose value is a function.
import React, { Component } from 'react'

class CounterTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    // prevState is not a keyword and can be any value such as previousState
    // the first parameter in setState is the actual "previous" state.
    this.setState(previousState => {
      return {count : previousState.count + 1}
    })
  }

  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default CounterTwo

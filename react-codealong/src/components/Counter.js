import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  // this.setState((previousStateGoesHere) => ({updatedStateGoesHere}))
  // this.setState((previousStateGoesHere, props-go-here-&-they're-optional) => ({updatedStateGoesHere}))
  increment() {
    this.setState((myPreviousStateGoesHereAsAVariable) => ({
      count: myPreviousStateGoesHereAsAVariable.count + 1 // or props.number...or s.thing like that
    }))
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter

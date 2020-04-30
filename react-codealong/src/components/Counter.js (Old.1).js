// This will not work because each time the state is updated directly,
// React will not re-render, thus, the "Counter - 0" will always say "0"
// even though the counter appears to be working in the browser console.
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  increment() {
    this.state.count = this.state.count + 1
    console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter

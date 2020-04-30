import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  increment() {
    // setState({object}, callback-arrow-function)
    this.setState({
      count: this.state.count + 1
       // this is the correct number because it updates ascycroniously
    }, () => {console.log('Callback value', this.state.count)})

    // this is one number less because this gets called before the state is set
    console.log(this.state.count)
  }

  // this doesn't work because it will not run each of the 5 calls asyncrionously...
  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  // ... to solve this problem you need to bass in a parameter into setState that
  // represents the previous state so it looks s.thing like this:

  /*
  increment() {
    this.setState((myPreviousStateGoesHereAsAVariable) => ({
      count: myPreviousStateGoesHereAsAVariable.count + 1
    }))
  }
  */

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

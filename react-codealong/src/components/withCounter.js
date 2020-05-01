// Lesson 34 (https://www.youtube.com/watch?v=rsBQj6X7UK8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=34)
// This concearns Higher Order Components (HOC) - the naming convention is lowerCamelCase
import React from 'react';

// FORMATTING
// const NewComponent = higherOrderComponent(originalComponent)
// const EnhancedComponent = higherOrderComponent(originalComponent)

//   (new component) (original component)
const withCounter = WrappedComponent => {
  class WithCounter extends React.Component {
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
      return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
    }
  }
  return WithCounter
}

export default withCounter

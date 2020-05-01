// Lesson 32 (https://www.youtube.com/watch?v=DNYXgtZBRPE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=32)
// WHen we have an error the whole program crashes...it would be nice to see where in the error tree
// the actual error is occuring.  That's what we're gonn do here!
import React, { Component } from 'react'

class ErrorBoundary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong, the Joker isn't a superhero!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary

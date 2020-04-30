// Lesson 23 (https://www.youtube.com/watch?v=KDXZibVdiEI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=23)
import React, { Component } from 'react'  // made with the "rce" snippet

class LifecycleB extends Component {
  constructor(props) {                    // made with the "rconst" snippet
    super(props)

    this.state = {
      name: "Vishwas"
    }
    console.log('LifecycleB constructor');// made with the "log" snippet
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps');
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount');
  }

  // Lesson 24 (Update Methods)
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true
  }

  // Lesson 24 (Update Methods)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null
  }

  // Lesson 24 (Update Methods)
  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate');
  }

  render() {
    console.log('LifecycleB render');
    return <div>LifecycleB</div>
  }
}

export default LifecycleB

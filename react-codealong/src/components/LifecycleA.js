// Lesson 23 (https://www.youtube.com/watch?v=KDXZibVdiEI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=23)
import React, { Component } from 'react'  // made with the "rce" snippet
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props) {                    // made with the "rconst" snippet
    super(props)

    this.state = {
      name: "Vishwas"
    }
    console.log('LifecycleA constructor');// made with the "log" snippet
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null
  }

  // Lesson 24 (Update Methods)
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount');
  }

  // Lesson 24 (Update Methods)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null
  }

  // Lesson 24 (Update Methods)
  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  // Lesson 24 (Update Methods)
  changeState = () => {
    this.setState({
      name: 'Codevolution'
    })
  }

  render() {
    console.log('LifecycleA render');
    return(
      <div>
        <div>LifecycleA</div>

        {/* We are going to click on the button to change state and see the update methods fire in the console */}
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA

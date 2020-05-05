import React, { Component } from 'react'

class Person extends Component {
  render() {
    return (
      <div>My Name is {this.props.name} and I am {this.props.age} years old</div>
    )
  }
}

export default Person

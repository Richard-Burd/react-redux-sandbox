import React, { Component } from 'react'

class Dog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Spot",
      age: 4,
      breed: "Dalmation"
    }
  }

  changeBreed = () => {
    if (this.state.breed == "Dalmation") {
      this.setState({
        breed: "Corgie"
      })
    } else {
      this.setState({
        breed: "Dalmation"
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.changeBreed}>
          I'm a Dog named {this.state.name} and I'm a {this.state.breed}
        </button>
      </div>
    )
  }
}

export default Dog

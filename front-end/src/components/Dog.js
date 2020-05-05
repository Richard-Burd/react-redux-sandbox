import React, { Component } from 'react'
import DogTricks from './DogTricks'

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
    if (this.state.breed === "Dalmation") {
      this.setState({
        breed: "Corgie"
      })
    } else {
      this.setState({
        breed: "Dalmation"
      })
    }
  }

  // this is a callback because the child of this component is calling this function:
  dogBark = () => {
    console.log("I'm barking with a callback function")
  }

  render() {
    return (
      <div>
        <button onClick={this.changeBreed}>
          I'm a Dog named {this.state.name} and I'm a {this.state.breed}
        </button>
        {/*        dogBark <= This allows you to use the dogBark function in the DogTricks component */}
        <DogTricks dogBark={this.dogBark}/>
        <button onClick={this.dogBark}>console bark from Dog</button>
      </div>
    )
  }
}

export default Dog

import React, { Component } from 'react'

let listOfTricks = [
  "bark",
  "sit",
  "roll-over"
]

class DogTricks extends Component {

  // The odd part about this "arrow function" is that there are no curly
  // brackets "{}" but instead, it uses the curved brackets "()"
  // It's based on this code here:
  // https://learn.co/tracks/full-stack-web-development-v8/module-16-react/section-4-props-and-state/using-callbacks-to-pass-information-lab
  // https://github.com/Richard-Burd/react-using-callbacks-to-pass-information-lab-v-000
  // ...see the "genRow" function
  genTricks = (trix) => (
    trix.map((trick, index) => <li key={index}>{trick}</li>)
  )

  render() {
    return (
      <div>
        {/* I need "this.props" in order to import the "dogBark" function from */}
        {/* the parent component called "Dog.js" */}
        <button onClick={this.props.dogBark}>console bark from DogTricks</button>
        <h3>List of Dog Tricks:</h3>
        <ul className="location-list-item">

          {/* This function below is native to this component and needs no props */}
          {this.genTricks(listOfTricks)}
        </ul>
      </div>
    )
  }
}

export default DogTricks

import React, { Component } from 'react'

const LIST = ["Bosnia", "Japan", "Tibet", "Malta", "Sardinia", "Socorta", "Abu Musa"]

class Locations extends Component {

  addLocation = (mySpecialEvent) => {
    console.log("You'd like to add a new location")
    console.log(`The event type is a: ${mySpecialEvent.type}`);
    console.log(`Your mouse latitude is: ${mySpecialEvent.clientX}`);
    console.log(`Your mouse longitude is: ${mySpecialEvent.clientY}`);
  }

  generateLocations = () => {
    return LIST.map(item => <li key={LIST.indexOf(item)}>{item}</li>)
    // instead of using "indexOf" use the native index extration
    // as used in DogTricks.js within this same directory
  }

  render() {
    return (
      <div>
      <h2>Here are some locations:</h2>
        <ul className="location-list-item">
          {this.generateLocations()}
        </ul>
        <button onClick={this.addLocation}>Add a New Location</button>
        {/* https://reactjs.org/docs/events.html#supported-events */}
      </div>
    )
  }
}

export default Locations

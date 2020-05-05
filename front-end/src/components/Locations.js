import React, { Component } from 'react'

const LIST = ["Bosnia", "Japan", "Tibet", "Malta", "Sardinia", "Socorta", "Abu Musa"]

class Locations extends Component {

  addLocation = () => {
    console.log("You'd like to add a new location")
  }

  generateLocations = () => {
    return LIST.map(item => <li key={LIST.indexOf(item)}>{item}</li>)
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

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://learn.co/tracks/full-stack-web-development-v8/module-16-react/section-8-async-react/async-react
// https://github.com/learn-co-curriculum/react-async-readme
import React, { Component } from 'react'

class FetchingComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      peopleInSpace: []
    }
  }

  makeSpacePeopleLineItems = (group) => (
    group.map((individual, index) =>
      <li key={index}>{individual.name}</li>)
  )

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
        <ol style={{ color: 'green', textAlign: 'left'}}>
          {this.makeSpacePeopleLineItems(this.state.peopleInSpace)}
        </ol>
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
}

export default FetchingComponent

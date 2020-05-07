// https://learn.co/tracks/full-stack-web-development-v8/module-16-react/section-6-forms/forms
// https://github.com/Richard-Burd/react-forms-v-000

// A controlled form is a form that derives its input values from state.
// When we have a controlled form, the state does not need to be stored in the
// same component. We could store state in a parent component, instead.
import React, { Component } from 'react'

class ControlledForm extends Component {
constructor(props) {   //<= for some reason, these are left out on the example from Learn.co cited in line 1 of this file
  super(props)         //<= for some reason, these are left out on the example from Learn.co cited in line 1 of this file

    this.state = {     //<= this just reads "state = {" in the example from Learn.co cited in line 1 of this file...it does not include "this"
      firstName: "John",
      lastName: "Henry",
      submittedData: []
    }
}                      //<= for some reason, these are left out on the example from Learn.co cited in line 1 of this file

  // you can call the event whatever you want e, event, (e), or (event) are common
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map((data, index) => {
      return <div key={index}><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  liveStateOfStateDisplayed = () => {
    return <div style={{ color: 'green'}}>Currently: {this.state.firstName} {this.state.lastName}</div>
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleFirstNameChange(event)}
            value={this.state.firstName}
          />
          <input
            type="text"
            onChange={event => this.handleLastNameChange(event)}
            value={this.state.lastName}
          />
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
        {this.liveStateOfStateDisplayed()}
      </div>
    )
  }
}

export default ControlledForm

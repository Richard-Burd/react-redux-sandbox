import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello"
    }

    // This is related to the third, doctrinal method discussed below in the render method
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // This is used for options 1 through 3 below in the render method.
  /*
  clickHandler(){
    this.setState({
      message: "Good Bye"
    })
    console.log(this);
  }
  */

  // This is used for option 3 below in the render method, it is essentially,
  // the "fourth" option to bind the event handler...this time, with an arrow function
  clickHandler = () => {
    this.setState({
      message: "Good Bye"
    });
    console.log(this)
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* This is slow on large apps: */}
        {/* This is your first option; binding event handlers: */}
        {/* <button onClick={this.clickHandler.bind(this)}>EventBind</button> */}

        {/* This is slow on large apps: */}
        {/* This is your second option; using an arrow function: */}
        {/* <button onClick={() => this.clickHandler()}>EventBind</button> */}

        {/* This is the doctrinal way, */}
        {/* This is your third option; we'll bind the handler in the constructor: */}
        <button onClick={this.clickHandler}>EventBind</button>
      </div>
    )
  }
}

export default EventBind

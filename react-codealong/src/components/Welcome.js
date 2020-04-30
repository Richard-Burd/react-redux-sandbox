import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    // we tend to destructure props in the render method on class components
    const {name, heroName} = this.props

    // this.props.name can now just be "name" since the props are destructured.
    return <h1>Welcome {name} a.k.a. {heroName}</h1>
  }
}

export default Welcome

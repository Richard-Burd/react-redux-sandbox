// Lesson 26 (https://www.youtube.com/watch?v=YCRuTT31qR0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=26)
// Right now this whole thing will re-render ever 4 seconds except for the pure component...
// ... it will only render once.

//              comment in the "Pure" and the component will not rerender every 4 seconds
import React, { /*Pure*/Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

//              comment in the "Pure" and the component will not rerender every 4 seconds
class ParentComp extends /*Pure*/Component { // created with the "rce" snippet
  constructor(props) {               // created with the "rconst" snippet
    super(props)

    this.state = {
      name: 'Vishwas'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Vishwas'
      })
    }, 4000)
  }

  render() {
    console.log('********** Parent Comp Render **********');
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp

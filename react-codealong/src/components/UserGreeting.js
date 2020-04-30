import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }

  }

  render() {
// Here's the first approach
    // if (this.state.isLoggedIn) {
    //   return (
    //       <div>Welcome Vishwas</div>
    //   )
    // } else {
    //     return (
    //       <div>Welcome Guest</div>
    //     )
    // }

// Here's the second approach
    // let message // stores the element to be rendered.
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vishwas</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

// Here's the third approach with the Ternary operator

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vishwas</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // )

// Here's the fourth approach with the Short Circuit operator that works if
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>


  }
}

export default UserGreeting

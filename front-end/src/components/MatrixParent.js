import React, { Component } from 'react'
import MatrixChild from './MatrixChild'

class MatrixParent extends Component {
  render() {
    return (
      <div>
        <MatrixChild />
      </div>
    )
  }
}

export default MatrixParent

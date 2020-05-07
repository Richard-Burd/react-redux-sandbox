import React, { Component } from 'react'
import MatrixChild from './MatrixChild'

class MatrixParent extends Component {
  // The constructor and "handleClickParentLevel" function are both repeats of what is
  // already in the child component: "MatrixChild.js" - this is repeated here only
  // to demonstrate the same exact functionality as what is in "MatrixChild.js"
  // but with props being passed as values from this parent to its child component.
  constructor(props) {
    super(props)

    this.state = {
      hasBeenClickedParentLevel: false,
      timesHasBeenClickedParentLevel: 0
    }
  }

  handleClickParentLevel = () => {
    this.setState({
      hasBeenClickedParentLevel: true,
    });
    // the first parameter that "setState" takes in is the previous state
    // frequently expressed as "prevState" or "previousState"
    this.setState(prevState => {
      return { timesHasBeenClickedParentLevel: prevState.timesHasBeenClickedParentLevel + 1 }
    })
  }
  render() {
    return (
      <div>
        <MatrixChild
          // here we are passing down these variables (ending in "ParentLevel")
          // as props to the child element
          handleClickParentLevel={this.handleClickParentLevel}
          hasBeenClickedParentLevel={this.state.hasBeenClickedParentLevel}
          timesHasBeenClickedParentLevel={this.state.timesHasBeenClickedParentLevel}
        />
      </div>
    )
  }
}

export default MatrixParent

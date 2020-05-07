import React, { Component } from 'react'

class MatrixChild extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasBeenClicked: false,
      timesHasBeenClicked: 0,
      color: false,
      nestedObject: {
        outerObjectKey: {
          innerObjectKey: "This is the innerObject's original value!"
        }
      }
    }
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    });
    // the first parameter that "setState" takes in is the previous state
    // frequently expressed as "prevState" or "previousState"
    this.setState(prevState => {
      return { timesHasBeenClicked: prevState.timesHasBeenClicked + 1 }
    })

    this.setState(previousState => {
      return { color: !previousState.color}
    })

    // here's how you change a nested object in the state
    this.setState({
      nestedObject: {
        outerObjectKey: {
          innerObjectKey: "This is the innerObject's value after being clicked twice!"
        }
      }
    });

    console.log(this.state);
    console.log(this.state.nestedObject.outerObjectKey.innerObjectKey);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          MatrixChild has {this.state.hasBeenClicked ? null : 'not '}
          been clicked {this.state.timesHasBeenClicked === 0 ? null :
          `${this.state.timesHasBeenClicked} times`}
        </button>

        {/* Instead of "if(){}else{}" statements, use this tiernary operator: */}
        {this.state.color === true ?
          <label style={{ color: 'red'}}>
            color true!
          </label>
          : null
        }

        {/* displaying a nested value inside a state object: */}
        <div>{this.state.nestedObject.outerObjectKey.innerObjectKey}</div>


        <button onClick={this.props.handleClickParentLevel}>
          MatrixChild (w/state & function in MatrixParent) has {this.props.hasBeenClickedParentLevel ? null : 'not '}
          been clicked {this.props.timesHasBeenClickedParentLevel === 0 ? null :
          `${this.props.timesHasBeenClickedParentLevel} times`}
        </button>
      </div>
    )
  }
}

export default MatrixChild

import React, { Component } from 'react'
import { connect } from 'react-redux' // this is a higher order component
import { addLegume } from '../redux/newLegume/newLegumeAction'

// the class component & constructor is tempoary...later on we'll connect to Redux
class AddLegumeForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      legumeName: ''
    }
  }

  handleNewLegumeSubmission = (event) => {
    this.setState({
      legumeName: event.target.value
    })
  }

  handleSubmit = event => {
    // alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault() // prevent page reload
    console.log(this.state); // this works with class & state
  }

  render() {
    const { legumeName } = this.state // destructuring is used with a class & state component
    return (
      <div>
        <br></br>
        <form onSubmit ={this.handleSubmit}>
          <label>Add Legume: </label>
          <input
            type='text'
            value={this.legumeName}
            onChange={this.handleNewLegumeSubmission}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default AddLegumeForm
/*
const mapStateToProps = state => {
  return {
    legumeName: state.newLegumeReducer[newLegumeReducer.length - 1]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLegume: () => dispatch(addLegume(legumeName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLegumeForm)
*/

import React, { Component } from 'react'
import { connect } from 'react-redux' // this is a higher order component
// import { addLegume } from '../redux/newLegume/newLegumeAction' // we're doing the actions in this file already


// the class component & constructor is tempoary...later on we'll connect to Redux
class AddLegumeForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    }); console.log(this.props);
        console.log(this.state);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    console.log(this.state);
    this.props.dispatch({
      type: 'ADD_LEGUME',
      legumePayload: this.state,
    });
    this.setState({
      text: '',
    });
  }

  listOfLegumes = () => {
    return this.props.legumePayload.map((data, index) => {
      return <div key={index}><span>{data.text}</span></div>
    })
  }

  render() {
    // const { legumePayload } = this.state
    return (
      <div style={{ color: '#33a0a5'}}>
        <br></br>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Add Legume: </label>
          <input
            type='text'
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input type="submit" />
          <div>
            <h3>Legumes List:</h3>
            {this.listOfLegumes()}
          </div>
        </form>
      </div>
    )
  }
}

//export default AddLegumeForm


const mapStateToProps = state => {
  return {
    //legumePayload: state.newLegumeReducer//.legumePayload
    //legumePayload: state.newLegumeReducer//.legumePayload
    legumePayload: state.newLegumeReducer.legumeList
  }
}

export default connect(
  mapStateToProps,
)(AddLegumeForm)

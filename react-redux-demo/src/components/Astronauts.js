import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAstronauts } from '../redux/astronauts/actions/fetchAstronauts'
//import logger from 'redux-logger'

class Astronauts extends Component {

  handleOnClick = () => {
    this.props.fetchAstronauts() // this is disabled and not working.
    console.log(this.props);
    console.log(this.state);
  }

  render() {
    console.log('rendering');

    console.log('Im rendering');
    return(
      <div>
        <button onClick={this.handleOnClick}>Astronauts Button</button>
  
      </div>
    );
  }
};

  function mapDispatchToProps(dispatch){
    return { fetchAstronauts: () => dispatch(fetchAstronauts()) }
  }


function mapStateToProps(state){
  return {astronauts: state.astronautsReducer}
}

export default connect(mapStateToProps, mapDispatchToProps)(Astronauts)

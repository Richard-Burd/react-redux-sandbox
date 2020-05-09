import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAstronauts } from '../redux/astronauts/actions/fetchAstronauts'


class Astronauts extends Component {

  componentDidMount() {
    console.log("Astronauts component did mount");
    console.log(this.props);
    fetchAstronauts();
    console.log(this.props)
  }

  render() {
    return(
      <div>
        <span>Astronauts Should be here!</span>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch){
  return { fetchAstronauts: () => dispatch(fetchAstronauts()) }
}

// you can't do this because there literally is no state right now.
function mapStateToProps(state){
  return {astronauts: state.astronauts}
}

export default connect(mapStateToProps, mapDispatchToProps)(Astronauts)

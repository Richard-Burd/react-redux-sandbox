import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAstronauts } from '../redux/astronauts/actions/fetchAstronauts'

class Astronauts extends Component {

 componentDidMount() {
   console.log("Astronauts component did mount");
   console.log(`Here are the props:${this.props}`);
   console.log(this.props);
 }

  handleOnClick = () => {
    console.log('clicked');
    this.props.fetchAstronauts()
  }


  render() {
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

// you can't do this because there literally is no state right now.
function mapStateToProps(state){
  return {astronauts: state.astronautsReducer}
//return {astronauts: state.astronautsReducer.astronauts} ???

}

export default connect(mapStateToProps, mapDispatchToProps)(Astronauts)

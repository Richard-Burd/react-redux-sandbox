// https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-4-async-redux/redux-thunk
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAstronauts } from '../redux/astronauts/actions/fetchAstronauts'

class Astronauts extends Component {

  handleOnClick() {
    this.props.fetchAstronauts()
  }

  showSomeConsoleLogs = () => {
    //this.props.fetchAstronauts()
    console.log("I'm gonna show props")
    console.log(this.state);
    console.log(this.props);
  }

  render() {
    // const astronauts = this.props.astronauts.map(astro => <li key={astro.id}>{astro.name}</li>);
    return(
      <div>
        {/* <button onClick={(event) = this.handleOnClick(event)} /> */}
        {/* <button onClick={(event) => this.handleOnClick(event)} /> */}
        {/* {astronauts} */}
        <h2>Astronaughts {this.showSomeConsoleLogs()}</h2>
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

//export default Astronauts

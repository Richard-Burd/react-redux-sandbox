// https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-4-async-redux/redux-thunk
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAstronauts } from '../redux/astronauts/actions/fetchAstronauts'

//import thunk from 'redux-thunk'
//import { compose, applyMiddleware } from 'redux'

class Astronauts extends Component {

  handleOnClick(event) {
    event.preventDefault();
    this.props.fetchAstronauts()
  }

  showSomeConsoleLogs = () => {
    // this.props.fetchAstronauts()
    console.log("I'm gonna show props")
    console.log(this.state);
    console.log(this.props);
  }

  componentDidMount() {
    //this.props.fetchAstronauts()
  }

  render() {
    // const astronauts = this.props.astronautsReducer.astronauts.map(astro => <li key={astro.id}>{astro.name}</li>);
    return(
      <div>
        <button onClick={(event) => this.handleOnClick(event)}>Get Astronauts</button>
        {/* <button onClick={(event) => this.handleOnClick(event)} /> */}
        {/* { astronauts } */}
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

// This doesn't work :(
// const composeEnhancer = Astronauts || compose;
// export default connect(mapStateToProps, composeEnhancer)(applyMiddleware(thunk))

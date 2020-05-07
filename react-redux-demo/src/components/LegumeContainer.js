import React from 'react'
import { connect } from 'react-redux' // this is a higher order component
import { addBean, subtractBean } from '../redux/bean/beanActions'
import { addPea, subtractPea } from '../redux/pea/peaActions'

function LegumeContainer (props) {
  return (
    <div>
      <div className="beans">
        <h3>Number of beans counted - {props.numOfBeans}</h3>
        <button onClick={props.addBean}>Add Bean</button>
        <button onClick={props.subtractBean}>Subtract Bean</button>
      </div>
      <div className="peas">
        <h3>Number of peas counted - {props.numOfPeas}</h3>
        <button onClick={props.addPea}>Add Pea</button>
        <button onClick={props.subtractPea}>Subtract Pea</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // numOfBeans: state..numOfBeans, <= This is no longer valid because now we have multiple reducers
    numOfBeans: state.beanReducer.numOfBeans,
    numOfPeas: state.peaReducer.numOfPeas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBean: () => dispatch(addBean()),
    subtractBean: () => dispatch(subtractBean()),
    addPea: () => dispatch(addPea()),
    subtractPea: () => dispatch(subtractPea()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LegumeContainer)

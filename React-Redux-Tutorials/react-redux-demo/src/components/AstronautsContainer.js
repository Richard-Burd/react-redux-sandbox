import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAstronauts } from '../redux'

function TestComponent ({ testData, fetchAstronauts }) {
  useEffect(() => {
    fetchAstronauts()
  }, [])
  return testData.loading ? (
    <h2>Loading</h2>
  ) : testData.error ? (
    <h2>{testData.error}</h2>
  ) : (
    <div>
      <h2>Astronauts List</h2>
      <div>
        {testData &&
          testData.astronauts &&
          testData.astronauts.map((astronaut, index) => <p key={index}>{astronaut.name}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    testData: state.astronaut
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAstronauts: () => dispatch(fetchAstronauts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent)

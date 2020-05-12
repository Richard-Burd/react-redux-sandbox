// THIS THING IS BROKEN AND DOESN'T WORK LIKE IT DOES ON VISHWAS' COMPUTER
// https://www.youtube.com/watch?v=a3iV5d8Q2-8&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=21
import React from 'react'

// this hook acts as a closed equivalent to the mapStateToProps function
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
  // this hook accepts a function as its parameter...this function is called as the
  // selector function
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer

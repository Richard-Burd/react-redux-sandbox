// Lesson 16 (https://www.youtube.com/watch?v=g5l8xu6i4XQ&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=16)
// in this file we will define our reducer
import { BUY_CAKE } from './cakeTypes'

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
}

export default cakeReducer

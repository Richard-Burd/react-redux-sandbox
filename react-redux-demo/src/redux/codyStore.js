// first we import the createStore method from Redux...
//import { createStore } from 'redux';

// for some reason, people like to do this:
import { INCREMENT_COUNT } from './codyAppFiles/actions/actions'


// alright, let's get 'thunk' going!:
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  count: 0,
}
// we define a rootReducer (name whatever you want) that takes in state
// as the first parameter and the action as the second parameter
/*
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state;
  }
}
*/


// now let's utilize the payload:
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: action.payload
      }
    default:
      return state;
  }
}

// export default createStore(rootReducer)

// alright, let's get 'thunk' going!:
export default createStore(rootReducer, applyMiddleware(thunk))

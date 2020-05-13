import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'
import astronautReducer from './astronaut/astronautReducer'

const rootReducer = combineReducers({
  astronaut: astronautReducer,
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
})

export default rootReducer

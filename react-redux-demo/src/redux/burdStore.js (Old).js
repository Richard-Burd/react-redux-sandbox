import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import beanReducer from './bean/beanReducer'
import peaReducer from './pea/peaReducer'
import newLegumeReducer from './newLegume/newLegumeReducer'
import thunk from 'redux-thunk'
import astronautsReducer from './astronauts/reducers/astronautsReducer'
import logger from 'redux-logger'

// trying to do an async action with this burdStore with this video:
// https://www.youtube.com/watch?v=Td-2D-_7Y2E
import axios from "axios";

/*
Thunk allows us to return a function inside of our action creator.
Normally, our action creator returns a plain JavaScript object...
that function inside of Thunk receives the store's dispatch function as its argument.
With that, we can dispatch multiple actions from inside that returned function.
*/

const ourLegumes = combineReducers({
  astronautsReducer: astronautsReducer,
  beanReducer: beanReducer,
  peaReducer: peaReducer,
  newLegumeReducer: newLegumeReducer
});

// https://stackoverflow.com/questions/52946133/unable-to-use-react-native-debugger-after-updating-react-native
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const burdStore = createStore(
  ourLegumes,
  composeEnhancer(applyMiddleware(thunk, logger)),
);
// const burdStore = createStore(beanReducer) // <= we're not doin this cuz were combining reducers now.


// const burdStore = createStore( // <= we're now adding thunk, so this won't work
//   ourLegumes,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// trying to do an async action with this burdStore with this video:
// THIS ACTUALLY WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// https://www.youtube.com/watch?v=Td-2D-_7Y2E

burdStore.dispatch((dispatch) => {
  dispatch({type: "START_ADDING_ASTRONAUTS_REQUEST"})
  axios.get("http://api.open-notify.org/astros.json")
    .then((response) => {
      dispatch({type: "ADD_ASTRONAUTS", payload: response.data.people})
    })
    .catch((err) => {
      dispatch({type: "FETCH_USERS_ERROR", payload: err})
    })
})



export default burdStore

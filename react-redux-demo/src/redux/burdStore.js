import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import beanReducer from './bean/beanReducer'
import peaReducer from './pea/peaReducer'
import newLegumeReducer from './newLegume/newLegumeReducer'
import thunk from 'redux-thunk'
import astronautsReducer from './astronauts/reducers/astronautsReducer'
import logger from 'redux-logger'
import axios from "axios";

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

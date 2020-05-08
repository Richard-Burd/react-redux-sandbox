import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import beanReducer from './bean/beanReducer'
import peaReducer from './pea/peaReducer'
import newLegumeReducer from './newLegume/newLegumeReducer'
import thunk from 'redux-thunk'
import astronautsReducer from './astronauts/reducers/astronautsReducer'
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
  composeEnhancer(applyMiddleware(thunk)),
);
// const burdStore = createStore(beanReducer) // <= we're not doin this cuz were combining reducers now.


// const burdStore = createStore( // <= we're now adding thunk, so this won't work
//   ourLegumes,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default burdStore

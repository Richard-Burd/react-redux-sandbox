import { createStore, combineReducers } from 'redux'
import beanReducer from './bean/beanReducer'
import peaReducer from './pea/peaReducer'

const ourLegumes = combineReducers({
  beanReducer: beanReducer,
  peaReducer: peaReducer
});

// const burdStore = createStore(beanReducer) // <= we're not doin this cuz were combining reducers now.
const burdStore = createStore(
  ourLegumes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default burdStore

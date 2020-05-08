import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'

const store = createStore(cakeReducer)

// The redux devtools extention can only work on one single store...
// Because this app has two (store & burdStore) it reads this one and ignores burdStore
// the { Provider } component imported from 'react-redux' does allow you to have two
// seperate stores each with its own seperate <Provider> wraps as seen in BurdApp.js
/*
const store = createStore(
  cakeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
*/
export default store

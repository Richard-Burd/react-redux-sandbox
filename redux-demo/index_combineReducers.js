// React Reduc Tutotrials - 7 - Store (https://www.youtube.com/watch?v=YAevAj6X6XU&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=7)
// to run this code, go to this directory in terminal & type in this command:
// redburd@ubuntu ~/Desktop/dev/2/react-redux-sandbox/redux-demo (master) $ node index_combineReducers.js
const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First Redux action'
  }
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM
  }
}

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }

    default: return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


unsubscribe()

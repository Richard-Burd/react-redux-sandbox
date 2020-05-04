// React Reduc Tutotrials - 7 - Store (https://www.youtube.com/watch?v=YAevAj6X6XU&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=7)
// to run this code, go to this directory in terminal & type in this command:
// redburd@ubuntu ~/Desktop/dev/2/react-redux-sandbox/redux-demo (master) $ node index
const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

// an Action is an object w/ a type property
// an Action Creator is a function that returns an action
function buyCake() {
  return {
    // 4.) when we dispatch the first action, the reducer sees that the type is "BUY_CAKE"
    type: BUY_CAKE,
    info: 'First Redux action'
  }
}

// (previousState, action) => newState

const initialState = { // previousState
  numOfCakes: 10
}

const reducer = (state = initialState, action) => {
  // 5.) ...the reducer will then try to match the "BUY_CAKE" with switch cases
  switch(action.type) {
    case BUY_CAKE: return {

      // (not necessary, but) create a copy of the state object
      ...state,

      // then make changes only to the properties that need changing
      numOfCakes: state.numOfCakes - 1
      // 6.) When it matches, it decrements the number of cakes above...
    }

    // 7.) ...then the reducer returns the new state
    default: return state
  }
}

// 1.) This is the first line that executes...this is where we create our Redux store
const store = createStore(reducer)

// 2.) We log the initial state of the application here:
console.log('Initial state', store.getState()); // "numOfCakes: 10"

// 3.)              store.subscribe sets up a listener to the state and logs any changes to it
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
// 8.) Next these dispatches all fire in order
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

// 9.) Finally, we unsubscribe to any changes in the store
unsubscribe()

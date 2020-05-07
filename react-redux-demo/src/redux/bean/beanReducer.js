const initialState = {
  numOfBeans: 0
}

const beanReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BEAN': return {
      ...state,
      numOfBeans: state.numOfBeans + 1
    }
    case 'SUBTRACT_BEAN': return {
      ...state,
      numOfBeans: state.numOfBeans - 1
    }
    default: return state
  }
}

export default beanReducer

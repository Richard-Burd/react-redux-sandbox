const initialState = {
  numOfPeas: 0
}

const peaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PEA': return {
      ...state,
      numOfPeas: state.numOfPeas + 1
    }
    case 'SUBTRACT_PEA': return {
      ...state,
      numOfPeas: state.numOfPeas - 1
    }
    default: return state
  }
}

export default peaReducer

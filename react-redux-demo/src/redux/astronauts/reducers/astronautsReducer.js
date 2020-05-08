function astronautsReducer(state = { astronauts: [], requesting: false }, action) {
  switch (action.type) {

    case 'START_ADDING_ASTRONAUTS_REQUEST':
      return {
        ...state,
        astronauts: [...state.astronautsReducer.astronauts],
        requesting: true
      }

    case 'ADD_ASTRONAUTS':
      return {
        ...state,
        astronauts: action.astronautsReducer.astronauts,
        requesting: false
      }

    default:
      return state;
  }
};

export default astronautsReducer

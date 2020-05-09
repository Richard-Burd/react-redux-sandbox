function astronautsReducer(state = { astronauts: [], requesting: false }, action) {
  console.log('astronautsReducer function entered');
  switch (action.type) {

    case 'START_ADDING_ASTRONAUTS_REQUEST':
      console.log("case 'START_ADDING_ASTRONAUTS_REQUEST'")
      return {
        ...state,
        astronauts: [...state.astronauts],
        requesting: true
      }

    case 'ADD_ASTRONAUTS':
      console.log("case 'ADD_ASTRONAUTS' entered")
      return {
        ...state,
        astronauts: action.astronauts,
        requesting: false
      }

    default:
      console.log("default case in astronautsReducer entered")
      return state;
  }
};

export default astronautsReducer

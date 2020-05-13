const reducer = (state = { astronauts: [], loading: false }, action) => {
  switch (action.type) {

    case 'START_ADDING_ASTRONAUTS_REQUEST':
      return {
        ...state,
        astronauts: [...state.astronauts],
        loading: true
      }

    case 'ADD_ASTRONAUTS':
      return {
        ...state,
        astronauts: action.astronauts,
        loading: false
      }

    default:
      return state;
  }
}

export default reducer

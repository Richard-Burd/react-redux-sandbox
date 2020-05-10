// this is following this video here:
// https://www.youtube.com/watch?v=Td-2D-_7Y2E
// import thunk from "redux-thunk";

const initialState = {
  fetching: false,
  fetched: false,
  astronauts: [],
  error: null,
}

const astronautsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_ADDING_ASTRONAUTS_REQUEST": {
      return {...state, fetching: true}
    }
    case "FETCH_USERS_ERROR": {
      return {...state, fetching: false, error: action.payload}
    }
    case "ADD_ASTRONAUTS": {
      return {...state, fetching: false, fetched: true, astronauts: action.payload}
    }
    default:
      console.log("default case in astronautsReducer entered")
      return state;
  }
};

export default astronautsReducer

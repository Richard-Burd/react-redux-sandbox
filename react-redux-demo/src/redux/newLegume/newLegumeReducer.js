let id = 2;

// const initialState = {legumeList: ["Lima Beans", "Black Beans", "Lintels", "Quarks"]}
const initialState = {legumeList: [{text: "Lima Beans", id: 1}, {text: "Lintels", id:2}]}


const newLegumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LEGUME':
      id++;
      const legumePayload = Object.assign({}, action.legumePayload, {id: id});
      return { legumeList: state.legumeList.concat(legumePayload) };
    default: return state
  }
}
/*
const newLegumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LEGUME':
      id++;
      const legumePayload = Object.assign({}, action.legumePayload, {id: id});
      return { legumeList: state.legumeList.concat(legumePayload) };
    default: return state
  }
}
*/

/*
const newLegumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_LEGUME': return [...state, action.payload.legumeName] // https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-3-react-redux-continued/redux-delete-codealong
    default: return state
  }
}
*/
export default newLegumeReducer

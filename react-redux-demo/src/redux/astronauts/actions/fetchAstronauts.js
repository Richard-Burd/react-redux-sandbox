import axios from "axios";

export const fetchAstronauts = () => {
  // this function doesn't have to be pure...it is allowed to have side effects
  // such as async API calls
  return (dispatch) => {
    dispatch({type: "START_ADDING_ASTRONAUTS_REQUEST"})
    axios.get("http://api.open-notify.org/astros.json")
      .then(response => {
        const astronauts = response.data
        dispatch({type: "ADD_ASTRONAUTS", payload: response.data.people})
      })
      .catch(err => {
        dispatch({type: "FETCH_USERS_ERROR", payload: err})
      })
  }
}

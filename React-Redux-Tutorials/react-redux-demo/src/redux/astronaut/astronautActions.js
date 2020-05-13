export const fetchAstronauts = () => {

  // fetch requests return a function that can have side effects
  return (dispatch) => {

    // this will set loading to true
    dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST'})
    fetch('http://api.open-notify.org/astros.json').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_ASTRONAUTS', astronauts: responseJSON.people })
    })


  };
}

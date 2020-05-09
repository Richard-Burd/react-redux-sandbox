// https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-4-async-redux/redux-thunk
// https://github.com/learn-co-curriculum/redux-thunk-readme

/*
export function fetchAstronauts() {
  const astronauts = fetch('http://api.open-notify.org/astros.json');
  return {
    type: 'ADD_ASTRONAUTS',
    astronauts
  };
};
*/


export function fetchAstronauts() {
  console.log('fetchAstronauts function fired');
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
    //.then(astronauts => console.log(`response: ${astronauts}`));
  };
}

// This will console log the JSON response
/*
fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then(object => console.log(object))
*/

// Failed alternative
//export function fetchAstronauts() {
//  return (dispatch) => {
//  fetch('http://api.open-notify.org/astros.json')
//    .then(response => response.json())
//    .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
//  };
//}

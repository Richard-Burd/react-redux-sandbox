// https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-4-async-redux/redux-thunk
// https://github.com/learn-co-curriculum/redux-thunk-readme
// import axios from 'axios';

/*
export function fetchAstronauts() {
  const astronauts = fetch('http://api.open-notify.org/astros.json');
  return {
    type: 'ADD_ASTRONAUTS',
    astronauts
  };
};
*/

/* THIS WAS THE MOST RECENT VERSION I WAS USING
export function fetchAstronauts() {
  console.log('fetchAstronauts function fired');
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
    //.then(astronauts => console.log(`response: ${astronauts}`));
    //.then(object => console.log(`Here it is: ${object}`))
  };
}
*/

// // let's try axios (this isn't working either)
// // https://www.youtube.com/watch?v=1QI-UE3-0PU
// export function fetchAstronauts() {
//   console.log('fetchAstronauts function fired');
//   const request = axios.get('http://api.open-notify.org/astros.json');

//   return (dispatch) => {
//     request.then(({data}) => {
//       dispatch({ type: 'BURD_TEST', payload: data.people })
//     });
//   }
// }

/////////////////////////////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=z2XCUu2wIl0
// let's try axios with Vishwas
/*
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = users => {
  console.log('fetchUsersSuccess was fired');
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = error => {
  console.log('fetchUsersFailure was fired');
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const fetchAstronauts = () => {
  console.log('fetchAstronauts function fired');
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data.map(user => user.name)

        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}
*/
//////////////////////////////////////////////////////////////////////

/*
export const fetchAstronauts = () => {
  console.log('fetchAstronauts function fired');
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' })
    fetch('http://api.open-notify.org/astros.json').then(response => {
      return response.json()
    }).then(responseJSON  => {
      dispatch({ type: 'ADD_ASTRONAUTS', astronauts: responseJSON })
    })
  }
}
*/




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

// let's import the promise request that mimics a fetch request:
import { incrementCount } from '../codyCountService'

// this is the action creator

// for some reason, people like to do this:
export const INCREMENT_COUNT = 'INCREMENT_COUNT'

// this is the action creator without using thunk for async actions
//export const incrementCountAction = () => ({
//  type: INCREMENT_COUNT
//})


// alright, let's get 'thunk' going!:
// now you need the action creator to return a function
// export const incrementCountAction = () => (dispatch, getState) => ({
//   type: INCREMENT_COUNT
// })

export const incrementCountAction = () => async (
  dispatch,
  getState
) => {
  const newCount = await incrementCount();
  dispatch({
  type: INCREMENT_COUNT,
  payload: newCount
  })
}

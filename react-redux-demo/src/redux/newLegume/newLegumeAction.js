export const addLegume = (legumeName) => {
  return {
    type: 'ADD_LEGUME',
    payload: {
      legumeName: legumeName
    }
  }
}

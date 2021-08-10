// payload is the data sent to the reducer
export const setFavorite = (payload) => {
  return {
    type: 'SET_FAVORITE',
    payload,
  }
};
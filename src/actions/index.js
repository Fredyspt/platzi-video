import { SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST } from "./actionTypes";

// payload is the data sent to the reducer
export const setFavorite = (payload) => {
  return {
    type: SET_FAVORITE,
    payload,
  }
};

export const deleteFavorite = (payload) => {
  return {
    type: DELETE_FAVORITE,
    payload,
  };
};

export const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};
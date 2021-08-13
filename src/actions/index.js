import {
  SET_FAVORITE,
  DELETE_FAVORITE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  GET_VIDEO_SOURCE
} from "./actionTypes";

// payload is the data sent to the reducer
export const setFavorite = (payload) => {
  return {
    type: SET_FAVORITE,
    payload,
  };
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

export const logoutRequest = (payload) => {
  return {
    type: LOGOUT_REQUEST,
    payload,
  };
};

export const registerRequest = (payload) => {
  return {
    type: REGISTER_REQUEST,
    payload,
  };
};

export const getVideoSource = (payload) => {
  return {
    type: GET_VIDEO_SOURCE,
    payload,
  };
};

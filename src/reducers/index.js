import {
  SET_FAVORITE,
  DELETE_FAVORITE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  GET_VIDEO_SOURCE,
  SEARCH_ITEM
} from "../actions/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      const exists = state.myList.find((item) => item.id === action.payload.id);
      if (exists) return { ...state };

      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case GET_VIDEO_SOURCE:
      return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload))
          || state.originals.find(item => item.id === Number(action.payload))
          || []
      };
    case SEARCH_ITEM:
      const isNotSearching = action.payload === '';
      if(isNotSearching) { return { ...state, searchResults: [] } } 
      
      const listas = [...state.trends, ...state.originals];
      return {
        ...state,
        searchResults: listas.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
      };
    default:
      return state;
  }
};

export default reducer;

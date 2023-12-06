import {
  GET_LIST_RESORT_FAIL,
  GET_LIST_RESORT_REQUEST,
  GET_LIST_RESORT_SUCCESS,
} from "../constants/resortConstants";

export const resortReducers = (state = { resorts: [] }, action) => {
  switch (action.type) {
    case GET_LIST_RESORT_REQUEST:
      return {
        loading: true,
        resorts: [],
      };

    case GET_LIST_RESORT_SUCCESS:
      return {
        loading: false,
        resorts: action.payload,
      };

    case GET_LIST_RESORT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

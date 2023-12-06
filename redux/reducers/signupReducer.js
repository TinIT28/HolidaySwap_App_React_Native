import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/signupConstants";

const initialState = {
  loading: false,
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: false,
        success: false,
        error: null,
      };

    default:
      return state;
  }
};

export default signupReducer;

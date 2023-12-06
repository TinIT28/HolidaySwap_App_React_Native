// reducers.js

import {
  GET_RATINGS_BOOKING_REQUEST,
  GET_RATINGS_BOOKING_SUCCESS,
  GET_RATINGS_BOOKING_FAILURE,
  CREATE_RATING_BOOKING_REQUEST,
  CREATE_RATING_BOOKING_SUCCESS,
  CREATE_RATING_BOOKING_FAIL,
  CREATE_RATING_BOOKING_RESET,
} from "../constants/ratingConstant";

export const ratingsReducer = (state = { ratings: {} }, action) => {
  switch (action.type) {
    case GET_RATINGS_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RATINGS_BOOKING_SUCCESS:
      return {
        loading: false,
        ratings: action.payload,
        error: "",
      };
    case GET_RATINGS_BOOKING_FAILURE:
      return {
        loading: false,
        ratings: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createRatingBookingReducer = (state = { rating: {} }, action) => {
  switch (action.type) {
    case CREATE_RATING_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case CREATE_RATING_BOOKING_SUCCESS:
      return {
        loading: false,
        rating: action.payload,
        success: true,
        error: "",
      };
    case CREATE_RATING_BOOKING_FAIL:
      return {
        loading: false,
        rating: null,
        success: false,
        error: action.payload,
      };

    case CREATE_RATING_BOOKING_RESET:
      return {
        loading: false,
        rating: null,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

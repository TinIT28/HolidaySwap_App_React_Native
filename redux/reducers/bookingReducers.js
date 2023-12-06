import {
  CREATE_BOOKING_REQUEST,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAIL,
  CREATE_BOOKING_RESET,
  GET_HISTORY_BOOKING_REQUEST,
  GET_HISTORY_BOOKING_SUCCESS,
  GET_HISTORY_BOOKING_FAIL,
  GET_OWNER_BOOKING_REQUEST,
  GET_OWNER_BOOKING_SUCCESS,
  GET_OWNER_BOOKING_FAIL,
  GET_BOOKING_DETAIL_FAIL,
  GET_BOOKING_DETAIL_SUCCESS,
  GET_BOOKING_DETAIL_REQUEST,
} from "../constants/bookingConstants";

export const newBookingReducers = (state = { booking: {} }, action) => {
  switch (action.type) {
    case CREATE_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_BOOKING_SUCCESS:
      return {
        loading: false,
        success: true,
        booking: action.payload,
      };

    case CREATE_BOOKING_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case CREATE_BOOKING_RESET:
      return {
        ...state,
        loading: true,
        success: false,
      };

    default:
      return state;
  }
};

export const historyBookingReducers = (
  state = { historyBooking: [] },
  action
) => {
  switch (action.type) {
    case GET_HISTORY_BOOKING_REQUEST:
      return {
        loading: true,
        historyBooking: [],
      };

    case GET_HISTORY_BOOKING_SUCCESS:
      return {
        loading: false,
        historyBooking: action.payload,
      };

    case GET_HISTORY_BOOKING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const ownerBookingReducers = (state = { ownerBooking: [] }, action) => {
  switch (action.type) {
    case GET_OWNER_BOOKING_REQUEST:
      return {
        loading: true,
        ownerBooking: [],
      };

    case GET_OWNER_BOOKING_SUCCESS:
      return {
        loading: false,
        ownerBooking: action.payload,
      };

    case GET_OWNER_BOOKING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const bookingDetailsReducer = (state = { booking: {} }, action) => {
  switch (action.type) {
    case GET_BOOKING_DETAIL_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_BOOKING_DETAIL_SUCCESS:
      return {
        loading: false,
        booking: action.payload,
      };

    case GET_BOOKING_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    // case CLEAR_ERRORS:
    //   return {
    //     ...state,
    //     error: null,
    //   };

    default:
      return state;
  }
};

import {
  DATE_RANGE_BOOKING_REQUEST,
  DATE_RANGE_BOOKING_SUCCESS,
  DATE_RANGE_BOOKING_FAIL,
  DATE_RANGE_DEFAULT_REQUEST,
  DATE_RANGE_DEFAULT_SUCCESS,
  DATE_RANGE_DEFAULT_FAIL,
  DATE_OUT_REQUEST,
  DATE_OUT_SUCCESS,
  DATE_OUT_FAIL,
} from "./../constants/dateRangeConstants";

export const dateRangeReducer = (state = { dateRangeBooking: {} }, action) => {
  switch (action.type) {
    case DATE_RANGE_BOOKING_REQUEST:
      return {
        dateRangeBooking: null,
        success: false,
      };
    case DATE_RANGE_BOOKING_SUCCESS:
      return {
        success: true,
        dateRangeBooking: action.payload,
      };
    case DATE_RANGE_BOOKING_FAIL:
      return {
        success: false,
        dateRangeBooking: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const dateRangeDefaultReducer = (
  state = { dateRangeDefault: {} },
  action
) => {
  switch (action.type) {
    case DATE_RANGE_DEFAULT_REQUEST:
      return {
        dateRangeDefault: null,
        success: false,
      };
    case DATE_RANGE_DEFAULT_SUCCESS:
      return {
        success: true,
        dateRangeDefault: action.payload,
      };
    case DATE_RANGE_DEFAULT_FAIL:
      return {
        success: false,
        dateRangeDefault: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const dateRangeOutReducer = (state = { dateRangeOut: [] }, action) => {
  switch (action.type) {
    case DATE_OUT_REQUEST:
      return {
        dateRangeOut: null,
        success: false,
      };
    case DATE_OUT_SUCCESS:
      return {
        success: true,
        dateRangeOut: action.payload,
      };
    case DATE_OUT_FAIL:
      return {
        success: false,
        dateRangeOut: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

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

export const getDateRangeBooking = (dateRange) => async (dispatch) => {
  try {
    dispatch({ type: DATE_RANGE_BOOKING_REQUEST });

    dispatch({ type: DATE_RANGE_BOOKING_SUCCESS, payload: dateRange });
  } catch (error) {
    dispatch({
      type: DATE_RANGE_BOOKING_FAIL,
      payload: "Cannot set date range",
    });
  }
};

export const getDateRangeDefault = (dateRange) => async (dispatch) => {
  try {
    dispatch({ type: DATE_RANGE_DEFAULT_REQUEST });

    dispatch({ type: DATE_RANGE_DEFAULT_SUCCESS, payload: dateRange });
  } catch (error) {
    dispatch({
      type: DATE_RANGE_DEFAULT_FAIL,
      payload: "Cannot set date range",
    });
  }
};

export const getDateRangeOut = (dateRange) => async (dispatch) => {
  try {
    dispatch({ type: DATE_OUT_REQUEST });

    dispatch({ type: DATE_OUT_SUCCESS, payload: dateRange });
  } catch (error) {
    dispatch({
      type: DATE_OUT_FAIL,
      payload: "Cannot set date range",
    });
  }
};

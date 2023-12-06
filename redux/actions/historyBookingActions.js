import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {
  GET_HISTORY_BOOKING_FAIL,
  GET_HISTORY_BOOKING_REQUEST,
  GET_HISTORY_BOOKING_SUCCESS,
} from "../constants/bookingConstants";

export const getHistoryRequest = () => ({
  type: GET_HISTORY_BOOKING_REQUEST,
});

export const getHistorySuccess = (data) => ({
  type: GET_HISTORY_BOOKING_SUCCESS,
  payload: data,
});

export const getHistoryFail = (error) => ({
  type: GET_HISTORY_BOOKING_FAIL,
  payload: error,
});

export const getHistoryBooking = () => {
  return async (dispatch) => {
    dispatch({ type: GET_HISTORY_BOOKING_REQUEST });
    let token;
    await SecureStore.getItemAsync("secure_token").then((value) => {
      token = value;
    });
    try {
      const response = await axios.get(
        "https://holiday-swap.click/api/booking/historybooking",
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Booking History API Response:", response.data);

      dispatch({
        type: GET_HISTORY_BOOKING_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Booking History API Error:", error);
      dispatch({
        type: GET_HISTORY_BOOKING_FAIL,
        payload: error.message,
      });
    }
  };
};

import { format } from "date-fns";
import {
  CREATE_BOOKING_REQUEST,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAIL,
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
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const createBooking =
  (availableTimeId, userId, checkInDate, checkOutDate, guests) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_BOOKING_REQUEST });

      const accessToken = await SecureStore.getItemAsync("secure_token");

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const bookingData = {
        availableTimeId: availableTimeId,
        userId: userId,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        userOfBookingRequests: guests.map((item, index) => ({
          email: item.email,
          fullName: item.fullName,
          phoneNumber: item.phoneNumber,
        })),
      };

      const { data } = await axios.post(
        `https://holiday-swap.click/api/booking/create`,
        bookingData,
        config
      );

      dispatch({ type: CREATE_BOOKING_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_BOOKING_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getHistoryBooking = () => async (dispatch) => {
  try {
    dispatch({ type: GET_HISTORY_BOOKING_REQUEST });

    const accessToken = await SecureStore.getItemAsync("secure_token");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `https://holiday-swap.click/api/booking/historybooking`,
      config
    );

    dispatch({ type: GET_HISTORY_BOOKING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_HISTORY_BOOKING_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getOwnerBooking = () => async (dispatch) => {
  try {
    dispatch({ type: GET_OWNER_BOOKING_REQUEST });

    const accessToken = await SecureStore.getItemAsync("secure_token");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `https://holiday-swap.click/api/booking/ownerhistorybooking`,
      config
    );

    dispatch({ type: GET_OWNER_BOOKING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_OWNER_BOOKING_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getBookingDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOKING_DETAIL_REQUEST });

    const accessToken = await SecureStore.getItemAsync("secure_token");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `https://holiday-swap.click/api/booking/historybooking/${id}`,
      config
    );
    dispatch({
      type: GET_BOOKING_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOKING_DETAIL_FAIL,
      payload: error.response.data.message,
    });
    console.log("check eror", error);
  }
};

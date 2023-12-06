import axios from "axios";
import {
  GET_RATINGS_BOOKING_REQUEST,
  GET_RATINGS_BOOKING_SUCCESS,
  GET_RATINGS_BOOKING_FAILURE,
  CREATE_RATING_BOOKING_REQUEST,
  CREATE_RATING_BOOKING_SUCCESS,
  CREATE_RATING_BOOKING_FAIL,
  CREATE_RATING_BOOKING_RESET,
} from "../constants/ratingConstant";
import * as SecureStore from "expo-secure-store";

const apiUrl = "https://holiday-swap.click/api/v1/rating";

export const getRatingBooking = (bookingId) => async (dispatch) => {
  try {
    dispatch({ type: GET_RATINGS_BOOKING_REQUEST });

    const { data } = await axios.get(`${apiUrl}/property/${bookingId}`);

    dispatch({ type: GET_RATINGS_BOOKING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_RATINGS_BOOKING_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const createRatingBooking =
  (userId, bookingId, reviewData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_RATING_BOOKING_REQUEST });

      // const config = { headers: { "content-type": "application/json" } };

      let token;
      await SecureStore.getItemAsync("secure_token").then((value) => {
        token = value;
      });

      console.log("Check review data", reviewData);

      const { data } = await axios.post(
        `${apiUrl}/property/${bookingId}/user/${userId}`,
        reviewData
      );

      dispatch({ type: CREATE_RATING_BOOKING_SUCCESS, payload: data });
    } catch (error) {
      console.log("Check rating error", error);
      dispatch({
        type: CREATE_RATING_BOOKING_FAIL,
        payload: error.response.data.message,
      });
    }
  };

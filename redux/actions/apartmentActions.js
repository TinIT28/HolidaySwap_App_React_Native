import {
  GET_APARTMENT_REQUEST,
  GET_APARTMENT_SUCCESS,
  GET_APARTMENT_FAIL,
  APARTMENT_DETAIL_REQUEST,
  APARTMENT_DETAIL_SUCCESS,
  APARTMENT_DETAIL_FAIL,
} from "../constants/apartmentConstants";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const getApartments =
  (resortId, startTime, endTime, guest) => async (dispatch) => {
    try {
      dispatch({ type: GET_APARTMENT_REQUEST });

      const accessToken = await SecureStore.getItemAsync("secure_token");

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      let link = `https://holiday-swap.click/api/v1/apartment-for-rent?pageNo=0&pageSize=9999&sortBy=id&sortDirection=asc`;

      if (resortId) {
        link += `&resortId=${resortId}`;
      }

      if (startTime && endTime) {
        link += `&checkIn=${startTime}&checkOut=${endTime}`;
      }

      if (guest) {
        link += `&guest=${guest}`;
      }

      const { data } = await axios.get(link, config);

      dispatch({ type: GET_APARTMENT_SUCCESS, payload: data });
    } catch (error) {
      console.log("Check error", error);
      dispatch({ type: GET_APARTMENT_FAIL, payload: error });
    }
  };

export const getAparmentDetail = (availableId) => async (dispatch) => {
  try {
    dispatch({ type: APARTMENT_DETAIL_REQUEST });

    const { data } = await axios.get(
      `https://holiday-swap.click/api/v1/apartment-for-rent/${availableId}`
    );

    dispatch({ type: APARTMENT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APARTMENT_DETAIL_FAIL,
      payload: error.resposne.data.message,
    });
  }
};

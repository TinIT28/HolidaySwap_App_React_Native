import {
  GET_LIST_PROPERTY_REQUEST,
  GET_LIST_PROPERTY_SUCCESS,
  GET_LIST_PROPERTY_FAIL,
} from "../constants/propertyConstants";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const API_URL = "https://holiday-swap.click/api/v1";

export const getListProperty = (resortId) => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_PROPERTY_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/properties?pageNo=0&resortId=${resortId}&pageSize=999&sortDirection=asc&sortBy=id`
    );

    dispatch({ type: GET_LIST_PROPERTY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_LIST_PROPERTY_FAIL,
      payload: error.response.data.message,
    });
  }
};

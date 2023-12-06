import axios from "axios";
import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/signupConstants";

export const signUp = (dataRegiser) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `https://holiday-swap.click/api/v1/auth/register`,
      dataRegiser,
      config
    );

    dispatch({ type: SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error redux", error);
    dispatch({
      type: SIGNUP_FAILURE,
      payload: error.response?.data?.message || "An error occurred",
    });
  }
};

export const getListOwnership = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_OWNERSHIP_REQUEST });

    const accessToken = await SecureStore.getItemAsync("secure_token");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `https://holiday-swap.click/api/co-owners?userId=${userId}&pageNo=0&pageSize=10&sortBy=property_id`,
      config
    );

    dispatch({ type: GET_OWNERSHIP_SUCCESS, payload: data });
    return data; // return data for any further use
  } catch (error) {
    dispatch({ type: GET_OWNERSHIP_FAIL, payload: error });
    throw error; // rethrow the error for handling at the component level
  }
};

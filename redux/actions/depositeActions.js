import {
  DEPOSIT_FAIL,
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
} from "../constants/depositConstants";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export const depositPoint =
  (amount, orderInfor, returnURL, navigation) => async (dispatch) => {
    try {
      dispatch({ type: DEPOSIT_REQUEST });
      // const token = await AsyncStorage.getItem("token");
      const accessToken = await SecureStore.getItemAsync("secure_token");
      // console.log(token);
      console.log("amount", amount);
      console.log("orderInfor", orderInfor);
      console.log("returnUrl", returnURL);
      const { data } = await axios.get(
        `https://holiday-swap.click/api/v1/payment/Create_payment?amount=${amount}&orderInfor=${orderInfor}&returnURL=${returnURL}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      dispatch({ type: DEPOSIT_SUCCESS, payload: data });
    } catch (error) {
      //test code
      console.log("Loi ne", error);
      console.log("loi roi con di");
      dispatch({ type: DEPOSIT_FAIL, payload: error.response.data.message });
    }
  };

import axios from "axios";
import { SUBMIT_SEARCH } from "../constants/searchParamConstants";
import * as SecureStore from "expo-secure-store";

export const submitSearchParamApartmentForRent = (data) => async (dispatch) => {
  dispatch({ type: SUBMIT_SEARCH, searchParam: data });
};

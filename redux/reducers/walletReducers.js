// walletReducers.js

import {
  GET_TOTAL_POINT_FAIL,
  GET_TOTAL_POINT_SUCCESS,
  GET_TRANSACTION_HISTORY_FAIL,
  GET_TRANSACTION_HISTORY_SUCCESS,
} from "../constants/walletConstants";

const initialState = {
  totalPoint: null,
  transactionHistory: [], // Initialize with an empty array
  error: null,
};

const walletReducers = (state = { wallet: initialState }, action) => {
  switch (action.type) {
    case GET_TOTAL_POINT_SUCCESS:
      return {
        ...state,
        totalPoint: action.payload,
        error: null,
      };
    case GET_TOTAL_POINT_FAIL:
      return {
        ...state,
        totalPoint: null,
        error: action.payload,
      };
    case GET_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        transactionHistory: action.payload,
        loading: false,
        error: null,
      };
    case GET_TRANSACTION_HISTORY_FAIL:
      return {
        ...state,
        transactionHistory: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducers;

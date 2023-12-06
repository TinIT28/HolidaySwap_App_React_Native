import {
  DEPOSIT_FAIL,
  DEPOSIT_REQUEST,
  DEPOSIT_RESET,
  DEPOSIT_SUCCESS,
} from "../constants/depositConstants";

export const depositReducers = (state = { deposit: {} }, action) => {
  switch (action.type) {
    case DEPOSIT_REQUEST:
      return { loading: true, statusDeposit: false };
    case DEPOSIT_SUCCESS:
      return {
        ...state,
        loading: false,
        statusDeposit: true,
        deposit: action.payload,
      };
    case DEPOSIT_FAIL:
      return {
        ...state,
        loading: false,
        statusDeposit: false,
        error: action.payload,
      };
    case DEPOSIT_RESET:
      return {
        loading: false,
        statusDeposit: false,
        deposit: {},
        success: true,
      };
    default:
      return state;
  }
};

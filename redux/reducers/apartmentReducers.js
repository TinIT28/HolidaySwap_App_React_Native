import {
  APARTMENT_DETAIL_FAIL,
  APARTMENT_DETAIL_REQUEST,
  APARTMENT_DETAIL_SUCCESS,
  GET_APARTMENT_FAIL,
  GET_APARTMENT_REQUEST,
  GET_APARTMENT_SUCCESS,
} from "../constants/apartmentConstants";

export const apartmentReducers = (state = { apartments: [] }, action) => {
  switch (action.type) {
    case GET_APARTMENT_REQUEST:
      return {
        loading: true,
        apartments: [],
      };

    case GET_APARTMENT_SUCCESS:
      return {
        loading: false,
        apartments: action.payload.content,
      };

    case GET_APARTMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const apartmentDetailReducers = (state = { apartment: {} }, action) => {
  switch (action.type) {
    case APARTMENT_DETAIL_REQUEST:
      return {
        loading: true,
        apartment: {},
      };

    case APARTMENT_DETAIL_SUCCESS:
      return {
        loading: false,
        apartment: action.payload,
      };

    case APARTMENT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

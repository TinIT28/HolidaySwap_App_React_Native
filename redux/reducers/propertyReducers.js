import {
  GET_LIST_PROPERTY_REQUEST,
  GET_LIST_PROPERTY_SUCCESS,
  GET_LIST_PROPERTY_FAIL,
} from "../constants/propertyConstants";

export const propertiesReducers = (state = { properties: [] }, action) => {
  switch (action.type) {
    case GET_LIST_PROPERTY_REQUEST:
      return {
        loading: true,
        properties: [],
      };

    case GET_LIST_PROPERTY_SUCCESS:
      return {
        loading: false,
        properties: action.payload,
      };

    case GET_LIST_PROPERTY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

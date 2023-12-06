import {
  CREATE_OWNERSHIP_REQUEST,
  CREATE_OWNERSHIP_SUCCESS,
  CREATE_OWNERSHIP_FAIL,
  CREATE_OWNERSHIP_RESET,
  GET_OWNERSHIP_REQUEST,
  GET_OWNERSHIP_SUCCESS,
  GET_OWNERSHIP_FAIL,
  GET_OWNERSHIP_DETAIL_REQUEST,
  GET_OWNERSHIP_DETAIL_SUCCESS,
  GET_OWNERSHIP_DETAIL_FAIL,
} from "../constants/ownershipConstants";

export const newOwnershipReducers = (state = { ownership: {} }, action) => {
  switch (action.type) {
    case CREATE_OWNERSHIP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_OWNERSHIP_SUCCESS:
      return {
        loading: false,
        success: true,
        ownership: action.payload,
      };

    case CREATE_OWNERSHIP_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case CREATE_OWNERSHIP_RESET:
      return {
        ...state,
        loading: true,
        success: false,
        ownership: null,
      };

    default:
      return state;
  }
};

export const ownershipReducers = (state = { ownerships: {} }, action) => {
  switch (action.type) {
    case GET_OWNERSHIP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_OWNERSHIP_SUCCESS:
      return {
        loading: false,
        success: true,
        ownerships: action.payload,
      };

    case GET_OWNERSHIP_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const ownershipDetailsReducer = (
  state = { owner: {}, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_OWNERSHIP_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_OWNERSHIP_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        owner: action.payload,
        error: null,
      };

    case GET_OWNERSHIP_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

import {
  DISLIKE_POST_FAIL,
  DISLIKE_POST_REQUEST,
  DISLIKE_POST_RESET,
  DISLIKE_POST_SUCCESS,
  GET_BLOG_DETAIL_FAIL,
  GET_BLOG_DETAIL_REQUEST,
  GET_BLOG_DETAIL_SUCCESS,
  GET_BLOG_FAIL,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  LIKE_POST_FAIL,
  LIKE_POST_REQUEST,
  LIKE_POST_RESET,
  LIKE_POST_SUCCESS,
} from "../constants/blogConstants";

const initialState = {
  listBlog: [],
  error: null,
};

const blogReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG_REQUEST:
      return {
        ...state,
        listBlog: [],
        error: null,
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        listBlog: action.payload,
        error: null,
      };
    case GET_BLOG_FAIL:
      return {
        ...state,
        listBlog: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducers;

export const blogDetailsReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case GET_BLOG_DETAIL_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_BLOG_DETAIL_SUCCESS:
      return {
        loading: false,
        blog: action.payload,
      };

    case GET_BLOG_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const likePostReducer = (state = { postLike: {} }, action) => {
  switch (action.type) {
    case LIKE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case LIKE_POST_SUCCESS:
      return {
        loading: false,
        postLike: action.payload,
        success: true,
      };
    case LIKE_POST_FAIL:
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

export const dislikePostReducer = (state = { postDislike: {} }, action) => {
  switch (action.type) {
    case DISLIKE_POST_REQUEST:
      return {
        ...state,
        dislikeSuccess: false,
        loading: true,
      };
    case DISLIKE_POST_SUCCESS:
      return {
        dislikeSuccess: true,
        loading: false,
        postDislike: action.payload,
      };
    case DISLIKE_POST_FAIL:
      return {
        ...state,
        loading: false,
        dislikeSuccess: false,
        error: action.payload,
      };
    case DISLIKE_POST_RESET:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

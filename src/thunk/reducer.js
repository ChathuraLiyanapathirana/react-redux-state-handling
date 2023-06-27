import {
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  POST_POSTS,
  POST_POSTS_ERROR,
  POST_POSTS_SUCCESS
} from "../types/post-type";

const initialState = {
  loading: false,
  posts: [],
  error: null
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
    case POST_POSTS:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS_ERROR:
    case POST_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case POST_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
};

export default postReducer;

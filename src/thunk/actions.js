import axios from "axios";
import { GET_POSTS_URL, POST_POSTS_URL } from "../constant";

import {
  createPostRequest,
  createPostError,
  createPostSuccess,
  getPostsRequest,
  getPostsError,
  getPostsSuccess
} from "./action-creators";

const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(getPostsRequest());
    try {
      const response = await axios.get(GET_POSTS_URL);
      dispatch(getPostsSuccess(response.data));
    } catch (error) {
      dispatch(getPostsError(error.message));
    }
  };
};

const createPost = (postData) => {
  return async (dispatch) => {
    dispatch(createPostRequest());
    try {
      const response = await axios.post(POST_POSTS_URL, postData);
      dispatch(createPostSuccess(response.data));
    } catch (error) {
      dispatch(createPostError(error.message));
    }
  };
};

export { fetchPosts, createPost };

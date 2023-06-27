import {
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  POST_POSTS,
  POST_POSTS_ERROR,
  POST_POSTS_SUCCESS
} from "../types/post-type";

const getPostsRequest = () => ({ type: GET_POSTS });
const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts
});
const getPostsError = (error) => ({ type: GET_POSTS_ERROR, payload: error });

const createPostRequest = () => ({ type: POST_POSTS });
const createPostSuccess = (post) => ({
  type: POST_POSTS_SUCCESS,
  payload: post
});
const createPostError = (error) => ({ type: POST_POSTS_ERROR, payload: error });

export {
  getPostsRequest,
  getPostsError,
  getPostsSuccess,
  createPostRequest,
  createPostError,
  createPostSuccess
};

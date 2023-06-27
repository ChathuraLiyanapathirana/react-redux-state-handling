import { GET_POSTS, POST_POSTS } from "../types/post-type";

const getPosts = () => {
  return {
    type: GET_POSTS
  };
};

const createPosts = (post) => {
  return {
    type: POST_POSTS,
    payload: post
  };
};

export { getPosts, createPosts };

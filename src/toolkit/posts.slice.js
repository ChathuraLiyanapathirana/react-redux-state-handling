import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_POSTS_URL, POST_POSTS_URL } from "../constant";

export const fetchPosts = createAsyncThunk("get/posts", async () => {
  const response = await axios.get(GET_POSTS_URL);
  return response.data;
});

export const createPosts = createAsyncThunk("post/posts", async (postData) => {
  const response = await axios.post(POST_POSTS_URL, postData);
  return response.data;
});

export const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.error.message;
      })
      .addCase(createPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.unshift(action.payload);
      })
      .addCase(createPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default PostsSlice.reducer;

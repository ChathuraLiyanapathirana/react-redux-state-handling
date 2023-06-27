import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./posts.slice";

export default configureStore({
  reducer: {
    posts: PostSlice
  }
});

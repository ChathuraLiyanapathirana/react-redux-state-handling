import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postReducer from "./reducer";

const rootReducer = combineReducers({
  posts: postReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});
export default store;

import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { GET_POSTS_URL, POST_POSTS_URL } from "../constant";
import {
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  POST_POSTS,
  POST_POSTS_ERROR,
  POST_POSTS_SUCCESS
} from "../types/post-type";

function* fetchPosts() {
  try {
    const response = yield call(axios.get, GET_POSTS_URL);
    yield put({ type: GET_POSTS_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: GET_POSTS_ERROR, payload: e.message });
  }
}

function* createPosts(action) {
  try {
    const response = yield call(axios.post, POST_POSTS_URL, action.payload);
    yield put({ type: POST_POSTS_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: POST_POSTS_ERROR, payload: e.message });
  }
}

function* postSaga() {
  yield takeLatest(GET_POSTS, fetchPosts);
  yield takeLatest(POST_POSTS, createPosts);
}

export default postSaga;

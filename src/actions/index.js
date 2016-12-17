import axios from "axios";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=123";

export function fetchPosts() {
  const request = axios.get(ROOT_URL + "/posts" + API_KEY);
  console.log(request);
  return {
    type: FETCH_POST,
    payload: request,
  };
}

export function createPost (props) {
  const request = axios.post(ROOT_URL + "/posts" + API_KEY);
  console.log(request);
  return {
    type: CREATE_POST,
    payload: request,
  };
}

import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=DEMO';

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log(request);

  return{
    type: FETCH_POSTS,
    payload: request
  };
}

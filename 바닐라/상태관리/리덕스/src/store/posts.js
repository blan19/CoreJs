import createStore from "../core/Redux.js";
import api from "../utils/api.js";

const initialState = {
  posts: [{ id: 1, title: "asd", body: "asda" }],
};

const GET_POSTS = "GET_POSTS";

const get_posts = async () => {
  const payload = await api.getPostsByAll();
  return { type: GET_POSTS, payload };
};

const store = createStore((state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
});

export { GET_POSTS, get_posts };
export default store;

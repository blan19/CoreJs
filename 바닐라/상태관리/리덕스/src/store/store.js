import createStore from "../core/Store.js";

const initialState = {
  count: 0,
  posts: [],
};

const GET_POSTS = "GET_POSTS";

const INCREASE_COUNT = "INCREASE_COUNT";
const DECREASE_COUNT = "DECREASE_COUNT";

const get_posts = () => {
  return {
    type: GET_POSTS,
    payload: [{}],
  };
};

const increase_count = () => {
  return {
    type: INCREASE_COUNT,
  };
};
const decrease_count = () => {
  return {
    type: DECREASE_COUNT,
  };
};

const store = createStore((state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
});

export { GET_POSTS, get_posts };
export default store;

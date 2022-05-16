export default {
  getPosts(state, payload) {
    state.posts = [...payload];
    return state;
  },
  getPost(state, payload) {
    state.post = payload;
    return state;
  },
  addPost(state, payload) {
    state.posts.push(payload);
    return state;
  },
};

export default {
  getPosts(ctx, payload) {
    ctx.commit('getPosts', payload);
  },
  getPost(ctx, payload) {
    ctx.commit('getPost', payload);
  },
  addPost(ctx, payload) {
    ctx.commit('addPost', payload);
  },
};

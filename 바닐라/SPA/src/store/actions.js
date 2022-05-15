export default {
  getPosts(ctx, payload) {
    ctx.commit('getPosts', payload);
  },
  addPost(ctx, payload) {
    ctx.commit('addPost', payload);
  },
};

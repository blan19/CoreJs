import Component from "../core/Component.js";
import api from "../utils/api.js";

export default class Posts extends Component {
  constructor(...arg) {
    super(...arg);

    this.fetchPost();
  }
  init() {
    this.$state = { posts: [] };
  }

  template() {
    console.log(this.$state);
    const { posts } = this.$state;
    const template = `<div class="Posts">${
      posts.length
        ? posts
            .map(
              (post) =>
                `<li data-post-id="${post.id}"><h1>${post.title}</h1><p>${post.body}</p></li>`
            )
            .join("")
        : ""
    }</div>`;

    return template;
  }

  async fetchPost() {
    const posts = await api.getPostByAll();
    this.setState({ ...this.$state, posts });
  }
}

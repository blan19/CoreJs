import Component from "./core/Component.js";
import { observable, observe } from "./core/observer.js";
import store, { GET_POSTS, get_posts } from "./store/posts.js";
import api from "./utils/api.js";

export default class App extends Component {
  async init() {
    this.$state = observable(await this.initState());
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    });
  }

  async initState() {
    const posts = await api.getPostsByAll();
    return {
      posts,
    };
  }

  template() {
    const { posts } = this.$state;
    const template = posts.length
      ? `<ul class="Posts">${posts.map(
          (post) =>
            `<li data-post-id="${post.id}"><h1>${post.title}</h1><p>${post.body}</p></li>`
        )}</ul>`
      : "";

    return template;
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  mounted() {}
}

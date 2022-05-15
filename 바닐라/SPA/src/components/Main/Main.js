import Component from '../../core/Component.js';
import store from '../../store/index.js';
import api from '../../utils/api.js';
import '../../styles/main.css';
import NavBar from '../NavBar/NavBar.js';

export default class Main extends Component {
  constructor({ $app }) {
    super({ store, element: document.createElement('div') });
    this.$app = $app;
    this.$element.className = 'Main';
    this.$nav = new NavBar({ target: this.$app }).render();
    this.$app.appendChild(this.$element);

    this.initState();
  }

  async initState() {
    const posts = await api.getPosts();
    store.dispatch('getPosts', posts);
  }

  template() {
    const template = `<div class="Main-Header"><h1>포스팅</h1></div><div class="Main-Posts"><ul>${
      store.$state.posts.length
        ? store.$state.posts
            .map(
              (post) =>
                `<li data-post-id="${post.id}"><h1>${post.title}</h1><p>${post.body}</p></li>`,
            )
            .join('')
        : ''
    }</ul></div>`;
    return template;
  }

  render() {
    this.$element.innerHTML = this.template();
  }
}

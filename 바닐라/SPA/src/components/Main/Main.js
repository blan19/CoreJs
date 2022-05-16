import Component from '../../core/Component.js';
import store from '../../store/index.js';
import api from '../../utils/api.js';
import NavBar from '../NavBar/NavBar.js';
import '../../styles/main.css';
import { router } from '../../utils/router.js';

export default class Main extends Component {
  constructor({ $app }) {
    super({ store, element: document.createElement('div') });
    this.$app = $app;
    this.$element.className = 'Main';
    this.$nav = new NavBar({ target: this.$app }).render();
    this.$app.appendChild(this.$element);
  }

  async initState() {
    const posts = await api.getPosts();
    store.dispatch('getPosts', posts);
  }

  template() {
    const template = `<ul>${
      store.$state.posts.length
        ? store.$state.posts
            .map(
              (post) =>
                `<li data-post-id="${post.id}"><h1>${post.title}</h1><p>${post.body}</p></li>`,
            )
            .join('')
        : ''
    }</ul>`;
    return template;
  }

  render() {
    this.$element.innerHTML = this.template();
  }

  setEvent() {
    this.$element.addEventListener('click', (e) => {
      const $li = e.target.closest('li');
      if ($li) {
        const { postId } = $li.dataset;
        router(`products/${postId}`);
      }
    });
  }
}

import Component from '../../core/Component.js';
import store from '../../store/index.js';
import api from '../../utils/api.js';
import NavBar from '../NavBar/NavBar.js';
import PostContents from './PostContents.js';
import PostInfo from './PostInfo.js';
import '../../styles/post.css';

export default class Post extends Component {
  constructor({ $app, postId }) {
    super({ store, element: document.createElement('div') });
    this.$app = $app;
    this.postId = postId;
    this.$element.className = 'Post';
    this.$nav = new NavBar({ target: this.$app }).render();

    this.$app.appendChild(this.$element);
  }

  async initState() {
    // * state 주입
    const [, , postId] = location.pathname.split('/');
    const { userId, ...contents } = await api.getPostById(postId);
    const comments = await api.getCommentById(postId);
    const user = await api.getUserById(userId);
    const post = { user, contents, comments };
    store.dispatch('getPost', post);
  }

  mounted() {
    const { user, contents } = store.$state.post;

    // * 초기화
    this.$element.innerHTML = '';

    // * 자식 컴포넌트
    new PostInfo({ target: this.$element, state: user });
    new PostContents({ target: this.$element, state: contents });
  }
}

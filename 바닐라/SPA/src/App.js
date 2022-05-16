import Main from './components/Main/Main.js';
import Post from './components/Post/Post.js';
import { routerInit } from './utils/router.js';
import './styles/style.css';

export default class App {
  constructor({ app }) {
    this.$app = app;

    routerInit(this.routes);

    this.routes();
  }

  routes() {
    const $root = document.querySelector('.root');
    const { pathname } = location;

    $root.innerHTML = '';

    if (pathname === '/') {
      new Main({ $app: $root }).render();
    } else if (pathname.match(/\/products\/\d/)) {
      const [, , postId] = pathname.split('/');
      new Post({ $app: $root, postId }).render();
    }
  }
}

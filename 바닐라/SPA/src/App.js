import Main from './components/Main/Main.js';
import './styles/style.css';

export default class App {
  constructor({ app }) {
    this.$app = app;

    this.routes();
  }

  routes() {
    const { pathname } = location;

    this.$app.innerHTML = '';

    if (pathname === '/') {
      new Main({ $app: this.$app }).render();
    }
  }
}

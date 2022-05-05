import { Products, Product, Cart } from './components';

export default class App {
  constructor({ $app }) {
    this.$app = $app;
    this.state = {};

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
  }

  render() {
    const { pathname } = location;
    console.log(pathname);
    if (pathname === '/') {
      new Products({
        $app: this.$app,
        initialState: [{ id: '1', name: '아메리카노' }],
      }).render();
    } else if (pathname.indexOf('/products/') === 0) {
      new Product({ $app: this.$app, initialState: 'Product Page' }).render();
    } else if (pathname === '/cart') {
      new Cart({ $app: this.$app, initialState: 'Cart Page' }).render();
    }
  }
}

import Main from "./components/Main.js";
import Cart from "./components/Cart.js";
import Product from "./components/Product.js";
import api from "./utils/api.js";
import { routeInit } from "./utils/router.js";

export default class App {
  constructor({ $app }) {
    this.$app = $app;
    this.state = {
      products: [],
      product: {},
    };

    // * components

    // * render
    // routeInit(this.init);
    // this.init();
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    console.log(this.state);
  }

  // async init() {
  //   const { pathname } = location;
  //   console.log(pathname);
  //   if (pathname === "/web/") {
  //     // * Main
  //     const mainState = await api.getByAll();
  //     this.setState({ ...this.state, products: mainState });
  //     new Main({
  //       $app: this.$app,
  //       initialState: this.state.products,
  //       onClick: (id) => {},
  //     }).render();
  //   } else if (pathname.includes("/web/products/") === 0) {
  //     // * Product
  //     new Product({ $app: this.state, initialState: "asd" }).render();
  //   } else if (pathname === "/web/cart") {
  //     // * Cart
  //     new Cart({ $app: this.$app }).render();
  //   }
  // }

  render() {
    console.log(location);
    const { pathname } = location;
  }
}

export default class Product {
  constructor({ $app, initialState }) {
    this.$target = document.createElement("div");
    this.$target.className = "ProductDetailPage";
    $app.appendChild(this.$target);

    // * State
    this.state = initialState;

    // * render
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    const template = `<h1>상품 정보</h1>`;

    this.$target.innerHTML = template;
  }
}

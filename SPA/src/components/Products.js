export default class Products {
  constructor({ $app, initialState }) {
    this.$target = $app;
    this.state = initialState;
    this.container = document.createElement('div');
    this.container.className = 'Products';
    this.container.innerHTML = '<h1>상품 목록</h1>';
    this.$target.appendChild(this.container);
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    const ul = document.createElement('ul');
    const template = `${
      this.state.length
        ? this.state.map(
            (product) =>
              `<li data-product-id="${product.id}"><h1>${product.name}</h1></li>`,
          )
        : ''
    }`;
    ul.innerHTML = template;
    console.log(this.state);
    this.container.appendChild(ul);
  }
}

export default class Cart {
  constructor({ $app, initialState }) {
    this.$target = $app;
    this.state = initialState;
    this.container = document.createElement('div');
    this.container.className = 'Products';

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }
  render() {
    const template = `<h1>${this.state}</h1>`;
    this.container.innerHTML = template;
    this.$target.appendChild(this.container);
  }
}

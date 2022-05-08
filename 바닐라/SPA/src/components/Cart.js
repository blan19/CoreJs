export default class Cart {
  constructor({ $app, initialState }) {
    this.$target = document.createElement("div");
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

  render() {}
}

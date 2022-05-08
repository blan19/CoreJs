export class About {
  constructor({ $app, initialState }) {
    this.$target = document.createElement("div");
    $app.appendChild(this.$target);
    this.render();
  }

  render() {}
}

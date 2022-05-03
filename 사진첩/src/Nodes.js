class Nodes {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = document.createElement("ul");
    $app.appendChild(this.$target);

    this.render();
  }
  setState(nextState) {
    this.state = nextState;
    this.render();
  }
  render() {
    this.$target.innerHTML = this.state.nodes.map(
      (node) => `<li>${node.name}</li>`
    );
  }
}

export default Nodes;

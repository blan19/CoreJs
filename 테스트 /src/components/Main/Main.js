export default class Main {
  constructor({ $app }) {
    this.$app = $app;
    this.$target = document.createElement("div");
    this.$target.className = "Main";
    this.$app.appendChild(this.$target);
  }

  render() {
    const template = `<h1>Hello World..!</h1>`;
    this.$target.innerHTML = template;
  }
}

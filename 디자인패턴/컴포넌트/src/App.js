import Posts from "./components/Posts.js";

export default class App {
  constructor({ $app }) {
    this.$app = $app;

    this.render();
  }

  render() {
    new Posts({ $target: this.$app });
  }
}

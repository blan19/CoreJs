import Main from "./components/Main/Main.js";

export default class App {
  constructor({ $app }) {
    this.$app = $app;
    console.log("app : ", this.$app);
    this.$main = new Main({ $app: this.$app });

    this.routes();
  }

  routes() {
    this.$main.render();
  }
}

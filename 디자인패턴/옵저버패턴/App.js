import { observable, observe } from "./observer.js";

export default class App {
  $target;
  $state;
  constructor({ $app }) {
    this.$app = $app;
    this.init();
  }
  init() {
    this.$state = observable({ name: "junseo", age: 27 });
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    });
  }

  setEvent() {}

  template() {
    const { name, age } = this.$state;
    const template = `<h1>${name}</h1><h1>${age}</h1>`;
    return template;
  }

  mounted() {}

  render() {
    this.$app.innerHTML = this.template();
  }
}

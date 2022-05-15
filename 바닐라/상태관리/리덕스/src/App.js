import Component from "./core/Component.js";
import store from "./store/store.js";

export default class App extends Component {
  template() {
    const { count } = store.getState();
    const template = `<div class="Counter"><button data-action="-">-</button><h1>${count}</h1><button data-action="+">+</button></div>`;
    this.$target.innerHTML = template;
  }

  setEvent() {
    this.$target.querySelector(".Counter").addEventListener("click", (e) => {});
  }
}

import Component from "./core/Component.js";

export default class App extends Component {
  initState() {
    return { count: 0 };
  }

  template() {
    const { count } = this.$state;
    const template = `<div class="Counter"><button data-action="onDecrease">-</button><h1>${count}</h1><button data-action="onIncrease">+</button></div>`;
    return template;
  }

  setEvent() {
    const counter = document.querySelector(".Counter");
    counter.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const { action } = e.target.dataset;
        this[action]();
      }
    });
  }

  onDecrease() {
    const { $state } = this;
    $state.count--;
  }

  onIncrease() {
    const { $state } = this;
    $state.count++;
  }
}

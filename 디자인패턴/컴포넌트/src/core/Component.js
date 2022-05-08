export default class Component {
  $target;
  $state;
  constructor({ $target }) {
    this.$target = $target;

    this.init();
    this.render();
    this.setEvent();
  }

  init() {}

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  setEvent() {}

  setState(nextState) {
    this.$state = { ...this.$state, ...nextState };
    this.render();
  }
}

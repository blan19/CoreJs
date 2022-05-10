import { observable, observe } from "./observer.js";

export default class Component {
  $target;
  $state;
  props;
  constructor(target, props) {
    this.$target = target;
    this.props = props;

    this.init();
  }

  init() {
    this.$state = observable(this.initState());
    console.log("state", this.$state);
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    });
  }

  initState() {
    return {};
  }

  setEvent() {}

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  mounted() {}
}

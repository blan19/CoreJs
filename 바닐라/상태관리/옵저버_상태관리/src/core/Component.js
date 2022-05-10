import { observable, observe } from "../store/observer.js";

export default class Component {
  $target;
  $state;
  props;
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.init();
  }

  init() {
    this.$state = observable(this.initState());
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

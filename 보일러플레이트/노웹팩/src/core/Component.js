export default class Component {
  $target;
  $state;
  props;
  constructor(target, props) {
    this.$target = target;
    this.props = props;

    this.init();
  }

  init() {}

  initState() {
    return {};
  }

  setEvent() {}

  template() {
    return "";
  }

  mounted() {}

  render() {
    this.$target.innerHTML = this.template();
  }
}

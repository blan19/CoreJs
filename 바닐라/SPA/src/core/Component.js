import Store from '../store/store.js';

export default class Component {
  constructor(props = {}) {
    let self = this;

    if (props.hasOwnProperty('element')) {
      this.$element = props.element;
    }

    this.template =
      this.template ||
      function () {
        return '';
      };
    this.setEvent = this.setEvent || function () {};
    this.mounted = this.mounted || function () {};
    this.render = this.render || function () {};

    if (props.store instanceof Store) {
      props.store.$events.subscribe('stateChange', () => {
        self.render();
        self.setEvent();
        self.mounted();
      });
    }
  }
}

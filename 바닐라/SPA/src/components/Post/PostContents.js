import dayjs from 'dayjs';

export default class PostContents {
  constructor({ target, state }) {
    this.$target = target;
    this.$state = state;
    this.$element = document.createElement('div');
    this.$element.className = 'Post-Contents';

    this.$target.appendChild(this.$element);

    this.render();
  }

  template() {
    const { title, body } = this.$state;
    const template = `<h1>${title}</h1><p>${body}</p>`;
    return template;
  }

  render() {
    this.$element.innerHTML = this.template();
  }
}

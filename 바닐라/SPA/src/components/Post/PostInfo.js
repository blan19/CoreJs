import dayjs from 'dayjs';

export default class PostInfo {
  constructor({ target, state }) {
    this.$target = target;
    this.$state = state;
    this.$element = document.createElement('div');
    this.$element.className = 'Post-Info';

    this.$target.appendChild(this.$element);

    this.render();
  }

  template() {
    const { name } = this.$state;
    const date = dayjs(new Date()).format('YYYY-MM-DD');
    const template = `<p>${name}</p><span>${date}</span>`;
    return template;
  }

  render() {
    this.$element.innerHTML = this.template();
  }
}

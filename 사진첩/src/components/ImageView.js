export default class ImageView {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'Modal ImageView';

    $app.appendChild(this.$target);

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = `<div class="content">${
      this.state ? `<img src="${this.state}" />` : ''
    }</div>`;

    this.$target.style.display = this.state ? 'block' : 'none';
  }
}

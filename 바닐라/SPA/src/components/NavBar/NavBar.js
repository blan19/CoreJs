export default class NavBar {
  constructor({ target }) {
    this.$target = target;
    this.$nav = document.createElement('nav');
    this.$nav.className = 'NavBar';
    this.$target.appendChild(this.$nav);
  }

  template() {
    const template = `<h1>싱글 페이지 어플리케이션</h1>`;
    return template;
  }

  render() {
    this.$nav.innerHTML = this.template();
  }
}

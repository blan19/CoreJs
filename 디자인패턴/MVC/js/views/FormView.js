import View from "../core/View.js";

const tag = "[FormView]";

class FormView extends View {
  constructor(el, options) {
    super(el, options);
    this.inputEl = el.querySelector("[type=text]");
    this.resetEl = el.querySelector("[type=reset]");
    this.showResetBtn(false);
    this.addEvents();
  }

  showResetBtn(show = true) {
    this.resetEl.style.display = show ? "block" : "none";
  }

  addEvents() {
    this.inputEl.addEventListener("keyup", (e) => this.onKeyUp(e));
  }

  onKeyUp() {}
}

export default FormView;

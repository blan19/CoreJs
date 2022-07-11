import FormView from "../views/FormView.js";

class MainController {
  constructor() {
    this.init();
  }

  init() {
    new FormView(document.querySelector("form"));
  }
}

export default MainController;

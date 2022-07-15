import Scanner from "./core/Scanner.js";
import mainViewModel from "./ViewModels/MainViewModel.js";

const App = class {
  #scanner;
  constructor() {
    this.#scanner = new Scanner();

    this.init();
  }

  init() {
    const mainTarget = this.#scanner.scan(document.querySelector("#target"));
    mainTarget.render(mainViewModel);
  }
};

export default App;
